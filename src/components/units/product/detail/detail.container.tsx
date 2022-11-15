import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { ErrorModal } from "../../../commons/modal/modal";
import { FETCH_IS_LIKED, FETCH_PRODUCT, LIKE_PRODUCT } from "./detail.queries";
import ProductDetailPresenter from "./skin1/detail.presenter";
import ProductDetailPresenter2 from "./skin2/detail.presenter2";
import ProductDetailPresenter3 from "./skin3/detail.presenter3";

export default function ProductDetailContainer() {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(false);
  const [thumbnail, setThumbnail] = useState("");

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: String(router.query.useditemId) },
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    setThumbnail(data?.fetchProduct.images[0]);
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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

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

  return (
    <>
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
      />
      {/* <ProductDetailPresenter2
        handleChange={handleChange}
        onClickCount={onClickCount}
        count={count}
        cart={cart}
        data={data}
        discount={discount}
        onClickLike={onClickLike}
        thumbnail={thumbnail}
        onClickImages={onClickImages}
      /> */}
      {/* <ProductDetailPresenter3
        handleChange={handleChange}
        onClickCount={onClickCount}
        count={count}
        cart={cart}
        data={data}
        discount={discount}
        onClickLike={onClickLike}
        thumbnail={thumbnail}
        onClickImages={onClickImages}
      /> */}
    </>
  );
}
