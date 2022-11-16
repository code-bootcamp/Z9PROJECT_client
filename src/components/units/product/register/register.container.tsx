import { schema, updateSchema } from "./atom/schema";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import RegisterPresenter from "./register.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import { categoryContents, categoryTitle } from "./atom/category";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import {
  CREATE_PRODUCT,
  FETCH_USER,
  UPDATE_PRODUCT,
  UPLOAD_IMAGES,
} from "./register.queries";
import { useRouter } from "next/router";
import { IRegisterContainerProps } from "./register.types";

export default function RegisterContainer(P: IRegisterContainerProps) {
  const { edit, fetchProduct } = P;
  const { register, handleSubmit, setValue, getValues, watch } = useForm({
    resolver: yupResolver(edit ? updateSchema : schema),
    mode: "onChange",
  });

  let optionLength: string[] = [];
  const router = useRouter();
  const [option, setOption] = useState(0);
  const [imgFiles, setImgFiles] = useState<File[]>();
  const [category, setCategory] = useState<string[]>([""]);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [uploadImages] = useMutation(UPLOAD_IMAGES);
  const contentsRef = useRef<any>(null);
  const nameRef = useRef<any>(null);
  const { data: fetchUser } = useQuery(FETCH_USER);

  useEffect(() => {
    setValue("name", fetchProduct?.fetchProduct.name);
    setValue("option1", fetchProduct?.fetchProduct.option1);
    setValue("option2", fetchProduct?.fetchProduct.option2);
    setValue("option3", fetchProduct?.fetchProduct.option3);
    setValue("option4", fetchProduct?.fetchProduct.option4);
    setValue("option5", fetchProduct?.fetchProduct.option5);
    setValue("validFrom", fetchProduct?.fetchProduct.validFrom);
    setValue("validUntil", fetchProduct?.fetchProduct.validUntil);
    setValue("originPrice", fetchProduct?.fetchProduct.originPrice);
    setValue("discountPrice", fetchProduct?.fetchProduct.discountPrice);
    setValue("quantity", fetchProduct?.fetchProduct.quantity);
    setValue("youtubeLink", fetchProduct?.fetchProduct.youtubeLink);
    setValue("content", fetchProduct?.fetchProduct.content);
    setValue("skin", String(fetchProduct?.fetchProduct.skin));
    setValue("info.type", fetchProduct?.fetchProduct.productDetail.type);
    setValue("info.option1", fetchProduct?.fetchProduct.productDetail.option1);
    setValue("info.option2", fetchProduct?.fetchProduct.productDetail.option2);
    setValue("info.option3", fetchProduct?.fetchProduct.productDetail.option3);
    setValue("info.option4", fetchProduct?.fetchProduct.productDetail.option4);
    setValue("info.option5", fetchProduct?.fetchProduct.productDetail.option5);
    setValue("info.option6", fetchProduct?.fetchProduct.productDetail.option6);
    setValue("info.option7", fetchProduct?.fetchProduct.productDetail.option7);
    setValue("info.option8", fetchProduct?.fetchProduct.productDetail.option8);
    setValue("info.option9", fetchProduct?.fetchProduct.productDetail.option9);
    setValue(
      "info.option10",
      fetchProduct?.fetchProduct.productDetail.option10
    );
    setValue(
      "info.option11",
      fetchProduct?.fetchProduct.productDetail.option11
    );
    setValue(
      "info.option12",
      fetchProduct?.fetchProduct.productDetail.option12
    );
    setValue(
      "info.option13",
      fetchProduct?.fetchProduct.productDetail.option13
    );
    setValue(
      "info.option14",
      fetchProduct?.fetchProduct.productDetail.option14
    );
    setValue("shopName", fetchProduct?.fetchProduct.shopName);
    setValue("ceo", fetchProduct?.fetchProduct.ceo);
    setValue("brn", fetchProduct?.fetchProduct.brn);
    setValue("mobn", fetchProduct?.fetchProduct.mobn);
    onChangeCategory(fetchProduct?.fetchProduct.productDetail.type);

    if (fetchProduct) {
      new Array(5)
        .fill(1)
        .map((el, i) =>
          getValues(`option${i + 1}`) !== null ? optionLength.push(el) : null
        );
      setOption(optionLength.length - 1);
    }
  }, [fetchProduct]);

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

  const onChangeContents = () => {
    const text = contentsRef?.current?.getInstance().getHTML();
    setValue("content", text === "<p><br><p>" ? "" : text);
  };

  const onDropImg = (inputImgs: File[]) => {
    setImgFiles(inputImgs);
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
            // detailImages: "",
          },
          createProductDetailInput: {
            ...info,
          },
        },
      });
      SuccessModal("상품 등록 완료!");
      router.push(`/product/${result.data?.createProduct.id}`);
    } catch (error) {
      if (error instanceof Error) {
        ErrorModal(error.message);
      }
    }
  };

  const onClickUpdate = () => async (data: any) => {
    alert("aaaa");
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
      router.push(`/product/${result.data?.updateProduct.id}`);
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  console.log();
  return (
    <RegisterPresenter
      edit={edit}
      register={register}
      handleSubmit={handleSubmit}
      getValues={getValues}
      category={category}
      nameRef={nameRef}
      option={option}
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
