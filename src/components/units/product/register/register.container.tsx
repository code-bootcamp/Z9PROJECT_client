import { schema } from "./atom/schema";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import RegisterPresenter from "./register.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import { categoryContents, categoryTitle } from "./atom/category";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import { CREATE_PRODUCT, FETCH_USER, UPLOAD_IMAGES } from "./register.queries";
import { useRouter } from "next/router";

export default function RegisterContainer() {
  const { register, handleSubmit, formState, setValue, getValues, watch } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });
  const router = useRouter();
  const [option, setOption] = useState(0);
  const [imgFiles, setImgFiles] = useState<File[]>();
  const [category, setCategory] = useState<string[]>([""]);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [uploadImages] = useMutation(UPLOAD_IMAGES);
  const contentsRef = useRef<any>(null);
  const nameRef = useRef<any>(null);
  const { data: fetchUser } = useQuery(FETCH_USER);

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

  return (
    <RegisterPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      getValues={getValues}
      category={category}
      nameRef={nameRef}
      option={option}
      onDropImg={onDropImg}
      selectDate={selectDate}
      contentsRef={contentsRef}
      optionEntity={optionEntity}
      onClickCreate={onClickCreate}
      onChangeCategory={onChangeCategory}
      onChangeContents={onChangeContents}
      watch={watch}
    />
  );
}