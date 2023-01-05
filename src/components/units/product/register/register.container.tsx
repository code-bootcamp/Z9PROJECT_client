import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ExportUseEffect from "./atom/useEffect";
import UseAuth from "../../../commons/hooks/useAuth";
import RegisterPresenter from "./register.presenter";
import { schema, updateSchema } from "./atom/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import { IRegisterContainerProps } from "./register.types";
import { categoryContents, categoryTitle } from "./atom/category";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import {
  CREATE_PRODUCT,
  FETCH_USER,
  UPDATE_PRODUCT,
  UPLOAD_IMAGES,
} from "./register.queries";

export default function RegisterContainer(P: IRegisterContainerProps) {
  const { isEdit, fetchProduct } = P;
  UseAuth();
  const { register, handleSubmit, setValue, getValues, watch } = useForm({
    resolver: yupResolver(isEdit ? updateSchema : schema),
    mode: "onChange",
  });
  const router = useRouter();
  const contentsRef = useRef<any>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [option, setOption] = useState<number>(0);
  const [imgFiles, setImgFiles] = useState<File[]>();
  const [category, setCategory] = useState<string[]>([""]);
  const [bgColor, setBgColor] = useState<string>("#f46a22");
  const [textColor, setTextColor] = useState<string>("#ffffff");
  const [uploadImages] = useMutation(UPLOAD_IMAGES);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const { data: fetchUser } = useQuery(FETCH_USER);
  const optionLength: string[] = [];

  const selectDate = (_: any, dateString: string[]) => {
    setValue("validFrom", dateString[0]);
    setValue("validUntil", dateString[1]);
  };
  const optionEntity = (operation: string) => () => {
    if (operation === "plus") {
      if (option === 4) return;
      setOption((prev) => prev + 1);
    }
    if (operation === "minus") {
      if (option === 0) return;
      setOption((prev) => prev - 1);
    }
  };

  const onDropImg = (inputImgs: File[]) => {
    setImgFiles(inputImgs);
  };

  const onChangeTextColor = (color: string) => {
    setTextColor(color);
    setValue("textColor", color);
  };
  const onChangebgColor = (color: string) => {
    setBgColor(color);
    setValue("bgColor", color);
  };
  const onChangeContents = () => {
    const text = contentsRef?.current?.getInstance().getHTML();
    setValue("content", text === "<p><br><p>" ? "" : text);
  };
  const onChangeCategory = (value: unknown) => {
    categoryTitle.forEach((el, i) =>
      el === value ? setCategory(categoryContents[i]) : null
    );
    setValue("info.type", value);
  };

  const onClickCreate = async (data: any) => {
    const { info, ...rest } = data;
    if (!imgFiles) {
      ErrorModal("상품 이미지는 필수 입니다.");
      return;
    }
    try {
      const resultImgs = await uploadImages({
        variables: {
          images: imgFiles,
        },
      });
      const imgUrl = resultImgs.data.uploadImages.map((el: any) => el.imageUrl);
      const result = await createProduct({
        variables: {
          createProductInput: {
            ...rest,
            endType: "TOTAL_QTY",
            userId: String(fetchUser.id),
            images: imgUrl,
          },
          createProductDetailInput: {
            ...info,
          },
        },
      });
      SuccessModal("상품 등록 완료!");
      void router.push(`/product/${String(result.data?.createProduct.id)}`);
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  const onClickUpdate = async (data: any) => {
    const { info, ...rest } = data;
    try {
      let imgUrl = "";
      if (imgFiles) {
        const resultImgs = await uploadImages({
          variables: {
            images: imgFiles,
          },
        });
        imgUrl = resultImgs.data.uploadImages.map((el: any) => el.imageUrl);
      } else {
        imgUrl = fetchProduct?.fetchProduct.images;
      }
      const result = await updateProduct({
        variables: {
          productId: String(router.query.useditemId),
          updateProductInput: { ...rest, images: imgUrl },
          updateProductDetailInput: { ...info },
        },
      });
      SuccessModal("상품 수정 완료!");
      void router.push(`/product/${String(result.data?.updateProduct.id)}`);
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  ExportUseEffect({
    setValue,
    getValues,
    setOption,
    optionLength,
    fetchProduct,
    onChangeCategory,
  });

  return (
    <RegisterPresenter
      isEdit={isEdit}
      register={register}
      handleSubmit={handleSubmit}
      getValues={getValues}
      category={category}
      nameRef={nameRef}
      option={option}
      bgColor={bgColor}
      textColor={textColor}
      onChangebgColor={onChangebgColor}
      onChangeTextColor={onChangeTextColor}
      onDropImg={onDropImg}
      selectDate={selectDate}
      contentsRef={contentsRef}
      optionEntity={optionEntity}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      onChangeCategory={onChangeCategory}
      onChangeContents={onChangeContents}
      watch={watch}
      fetchProduct={fetchProduct}
    />
  );
}
