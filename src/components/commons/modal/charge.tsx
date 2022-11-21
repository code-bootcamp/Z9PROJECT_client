import { DollarOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { styleSet } from "../../../commons/styles/styleSet";
import { PriceFormatter } from "../../../commons/utils";
import { CREATE_PAYMENT } from "../../units/users/myPage/mypage.queries";
import { FETCH_USER } from "../layout/layout.queries";
import { ErrorModal, SuccessModal } from "./modal";

const Button = styled.button`
  line-height: 100%;
  font-family: ${styleSet.font.B};
  color: ${styleSet.colors.white};
  font-size: ${styleSet.fontSize.s7};

  padding: 30px 30px 0 0;

  :hover {
    color: ${styleSet.colors.black};
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
  color: ${styleSet.colors.black};
`;

const Input = styled.input`
  padding: 10px;
  width: 384px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #000000;
  font-weight: 700;
  color: ${styleSet.colors.black};
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

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ChargeModal() {
  const [isChargeOpen, setIsChargeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const [price, setPrice] = useState(0);
  const inputRef = useRef<any>(0);
  const router = useRouter();
  const [createPayment] = useMutation(CREATE_PAYMENT);
  const { data: fetchUser } = useQuery(FETCH_USER);

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
    IMP.init("imp40524836");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "Z9 포인트 충전",
        amount: price,
        buyer_email: "",
        buyer_name: fetchUser?.fetchUser.nickname,
        // buyer_tel: fetchUser?.fetchUser.phoneNumber,
        // buyer_addr: fetchUser?.fetchUser.address,
        // buyer_postcode: fetchUser?.fetchUser.zipcode,
      },
      function (rsp: any) {
        if (rsp.success) {
          void createPayment({
            variables: {
              impUid: rsp.imp_uid,
              amount: rsp.paid_amount,
            },
          });
          SuccessModal(`${PriceFormatter(rsp.paid_amount)}원 충전 완료!`);
          onClickClose();
          router.reload();
        } else {
          ErrorModal("충전 실패. 다시 시도 바랍니다.");
        }
      }
    );
  };

  return (
    <>
      <Button onClick={onClickGoToCharge}>
        <DollarOutlined />
        &nbsp; 충전하기
      </Button>
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
