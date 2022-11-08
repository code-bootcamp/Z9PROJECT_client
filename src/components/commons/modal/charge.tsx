import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import { LegacyRef, MutableRefObject, useRef, useState } from "react";
import { styleSet } from "../../../commons/styles/styleSet";

const Button = styled.button`
  line-height: 100%;
  font-family: ${styleSet.font.B};
  color: ${styleSet.colors.red};

  :hover {
    font-family: ${styleSet.font.EB};
  }
`;

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  backdrop-filter: blur(4px);
`;

const Container = styled.div`
  padding: 40px;
  width: 464px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const ChargeButton = styled.div`
  width: 384px;
  height: 51px;
  background: ${(P: IStylesProps) =>
    P.isActive ? `${styleSet.colors.primary}` : "#bdbdbd"};
  border-radius: 10px;
  color: #fff;
  text-align: center;
  line-height: 51px;

  cursor: pointer;
`;

const CloseWrapper = styled.div`
  width: 100%;
  text-align: end;
`;

const CloseBtn = styled.button`
  width: 15px;
  height: 15px;
  background: url("/users/myPage/img_delete.png");
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

const Input = styled.input`
  padding: 10px;
  width: 384px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #000000;
  font-weight: 700;
`;

const ArrowDown = styled.img`
  position: absolute;
  top: 130px;
  right: 55px;
`;

const DropDownWrapper = styled.div`
  padding: 0;
  width: 384px;

  border: 1px solid #c4c4c4;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;
const Price = styled.button`
  padding: 15px 20px;
  height: 50px;
  color: #e0e0e0;
  font-weight: 400;
  border-bottom: 1px solid #c4c4c4;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

type IStylesProps = {
  isActive: boolean;
};

export default function ChargeModal() {
  const [isChargeOpen, setIsChargeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const [price, setPrice] = useState(0);
  const inputRef = useRef<any>(0);
  const router = useRouter();
  const onClickGoToCharge = () => {
    setIsChargeOpen(true);
  };
  const onClickClose = () => {
    setIsChargeOpen(false);
  };
  const TogglePrice = () => {
    setIsPriceOpen((prev) => !prev);
  };
  const onClickPrice = (price: number) => () => {
    inputRef.current.value = price;
    TogglePrice();
    onChangeInput();
    setPrice(price);
  };
  const onChangeInput = () => {
    setActive(true);
  };
  const onClickCharge = () => {
    onClickClose();
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트 충전",
        amount: price,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      function (rsp) {
        // if (rsp.success) {
        //   createPointTransactionOfLoading({
        //     variables: {
        //       impUid: rsp.imp_uid,
        //     },
        //   });
        //   alert("충전 성공!");
        //   onClickClose();
        //   router.reload();
        // } else {
        //   alert("충전 실패!");
        // }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Button onClick={onClickGoToCharge}>충전하기</Button>
      {isChargeOpen && (
        <Background>
          <Container>
            <CloseWrapper>
              <CloseBtn onClick={onClickClose}></CloseBtn>
            </CloseWrapper>
            <Title>충전하실 금액을 선택해주세요.</Title>
            <Input
              placeholder="포인트 선택"
              onClick={TogglePrice}
              ref={inputRef}
            />
            <ArrowDown src="/users/myPage/img_arrow.png" />
            {isPriceOpen && (
              <DropDownWrapper>
                <Price onClick={onClickPrice(1000)}>₩ 1,000</Price>
                <Price onClick={onClickPrice(10000)}>₩ 10,000</Price>
                <Price onClick={onClickPrice(50000)}>₩ 50,000</Price>
                <Price onClick={onClickPrice(100000)}>₩ 100,000</Price>
              </DropDownWrapper>
            )}
            <ChargeButton isActive={isActive} onClick={onClickCharge}>
              충전하기
            </ChargeButton>
          </Container>
        </Background>
      )}
    </>
  );
}