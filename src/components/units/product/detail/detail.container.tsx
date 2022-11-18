import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import {
  CREATE_ORDER,
  DELETE_PRODUCT,
  FETCH_COUNT_OF_QUESTIONS,
  FETCH_IS_LIKED,
  FETCH_PRODUCT,
  LIKE_PRODUCT,
} from "./detail.queries";
import ProductDetailPresenter from "./skin1/detail.presenter";
import ProductDetailPresenter2 from "./skin2/detail.presenter2";
import ProductDetailPresenter3 from "./skin3/detail.presenter3";

export default function ProductDetailContainer() {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [important, setImportant] = useState(false);
  const [graph, setGraph] = useState(0);

  const [createOrder] = useMutation(CREATE_ORDER);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: String(router.query.useditemId) },
    fetchPolicy: "cache-first",
  });

  const { data: countData } = useQuery(FETCH_COUNT_OF_QUESTIONS, {
    fetchPolicy: "cache-first",
    variables: { productId: String(router.query.useditemId) },
  });

  console.log(data, "프로덕트");

  useEffect(() => {
    setThumbnail(
      data?.fetchProduct.images
        ? data?.fetchProduct.images[0]
        : "/icon_logo.png"
    );
  }, [data]);

  const [likeProduct] = useMutation(LIKE_PRODUCT, {
    refetchQueries: [
      {
        query: FETCH_IS_LIKED,
        variables: { productId: String(router.query.useditemId) },
      },
    ],
  });

  const { data: fetchIsLiked } = useQuery(FETCH_IS_LIKED, {
    variables: { productId: String(router.query.useditemId) },
  });

  useEffect(() => {
    if (fetchIsLiked?.fetchIsLiked === true) {
      setCart(true);
    }
  }, [fetchIsLiked]);

  const handleChange = (value: string) => {};

  const onClickImages = (event: any) => {
    setThumbnail(event.target.src);
  };

  const onClickCount = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "qtyMinus" && count === 1) {
      ErrorModal("이미 최소수량 입니다.");
      return;
    }
    if (e.currentTarget.id === "qtyPlus") {
      setCount((prev) => prev + 1);
    } else if (e.currentTarget.id === "qtyMinus") {
      setCount((prev) => prev - 1);
    }
  };

  const onClickLike = async () => {
    setCart((prev) => !prev);
    await likeProduct({
      variables: { productId: String(router.query.useditemId) },
    });
  };

  const discount = Math.floor(
    ((data?.fetchProduct.originPrice - data?.fetchProduct.discountPrice) /
      data?.fetchProduct.originPrice) *
      100
  );

  const onClickOrder = async () => {
    try {
      await createOrder({
        variables: {
          productId: String(router.query.useditemId),
          price: data?.fetchProduct.discountPrice * count,
          quantity: count,
        },
        refetchQueries: [
          {
            query: FETCH_PRODUCT,
            variables: { productId: router.query.useditemId },
          },
        ],
      });
      SuccessModal("구매가 완료되었습니다.");
    } catch (error) {
      ErrorModal(error as string);
    }
  };

  const onClickTab = () => {
    setImportant(true);
  };
  const onClickTab2 = () => {
    setImportant(false);
  };

  const onClickDelete = async () => {
    try {
      await deleteProduct({
        variables: { productId: String(router.query.useditemId) },
        refetchQueries: [{ query: DELETE_PRODUCT }],
      });
      SuccessModal("삭제가 완료되었습니다,");
    } catch (error) {
      ErrorModal(error as string);
    }
  };

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://zero9.shop/${data?.fetchProduct.id}`
      );
      SuccessModal("클립보드에 링크가 복사되었습니다.");
    } catch (error) {
      ErrorModal("복사에 실패하였습니다");
    }
  };

  return (
    <>
      {data?.fetchProduct.skin === 1 && (
        <ProductDetailPresenter
          handleChange={handleChange}
          onClickCount={onClickCount}
          count={count}
          cart={cart}
          data={data}
          discount={discount}
          onClickLike={onClickLike}
          thumbnail={thumbnail}
          onClickImages={onClickImages}
          onClickOrder={onClickOrder}
          onClickTab={onClickTab}
          onClickTab2={onClickTab2}
          important={important}
          setGraph={setGraph}
          graph={graph}
          onClickDelete={onClickDelete}
          handleCopyClipBoard={handleCopyClipBoard}
          countData={countData}
        />
      )}
      {data?.fetchProduct.skin === 2 && (
        <ProductDetailPresenter2
          handleChange={handleChange}
          onClickCount={onClickCount}
          count={count}
          cart={cart}
          data={data}
          discount={discount}
          onClickLike={onClickLike}
          thumbnail={thumbnail}
          onClickImages={onClickImages}
          onClickOrder={onClickOrder}
          onClickTab={onClickTab}
          onClickTab2={onClickTab2}
          important={important}
          setGraph={setGraph}
          graph={graph}
          onClickDelete={onClickDelete}
          handleCopyClipBoard={handleCopyClipBoard}
          countData={countData}
        />
      )}

      {data?.fetchProduct.skin === 3 && (
        <ProductDetailPresenter3
          handleChange={handleChange}
          onClickCount={onClickCount}
          count={count}
          cart={cart}
          data={data}
          discount={discount}
          onClickLike={onClickLike}
          thumbnail={thumbnail}
          onClickImages={onClickImages}
          onClickOrder={onClickOrder}
          onClickTab={onClickTab}
          onClickTab2={onClickTab2}
          important={important}
          setGraph={setGraph}
          graph={graph}
          onClickDelete={onClickDelete}
          handleCopyClipBoard={handleCopyClipBoard}
          countData={countData}
        />
      )}
    </>
  );
}
