import { MouseEvent, useState } from "react";
import { ErrorModal } from "../../../commons/modal/modal";
import ProductDetailPresenter from "./detail.presenter";

export default function ProductDetailContainer() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(false);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onClickCart = () => {
    setCart((prev) => !prev);
  };

  const onClickCount = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "qtyMinus" && count === 0) {
      ErrorModal("이미 최소수량 입니다.");
      return;
    }
    if (e.currentTarget.id === "qtyPlus") {
      setCount((prev) => prev + 1);
    } else if (e.currentTarget.id === "qtyMinus") {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <ProductDetailPresenter
        handleChange={handleChange}
        onClickCount={onClickCount}
        count={count}
        onClickCart={onClickCart}
        cart={cart}
      />
    </>
  );
}
