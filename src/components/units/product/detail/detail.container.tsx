import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { ErrorModal } from "../../../commons/modal/modal";
import { FETCH_PRODUCT, LIKE_PRODUCT } from "./detail.queries";
import ProductDetailPresenter from "./skin1/detail.presenter";
import ProductDetailPresenter2 from "./skin2/detail.presenter2";
import ProductDetailPresenter3 from "./skin3/detail.presenter3";

export default function ProductDetailContainer() {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(false);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: String(router.query.useditemId) },
  });
  console.log(data);

  const [likeProduct] = useMutation(LIKE_PRODUCT);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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

  const onClickLike = async (productId: any) => {
    setCart((prev) => !prev);
    await likeProduct({
      variables: { productId: router.query.productId },
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
      />
      {/* <ProductDetailPresenter2
        handleChange={handleChange}
        onClickCount={onClickCount}
        count={count}
        cart={cart}
        data={data}
        onClickLike={onClickLike}
        discount={discount}
      /> */}
      {/* <ProductDetailPresenter3
        handleChange={handleChange}
        onClickCount={onClickCount}
        count={count}
        cart={cart}
        data={data}
        discount={discount}
        onClickLike={onClickLike}
      /> */}
    </>
  );
}
