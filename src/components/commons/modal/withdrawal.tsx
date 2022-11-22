import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DollarOutlined } from "@ant-design/icons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { styleSet } from "../../../commons/styles/styleSet";
import { PointFormatter, PriceFormatter } from "../../../commons/utils";
import { FETCH_USER } from "../layout/layout.queries";
import { ErrorModal, SuccessModal } from "./modal";
import { FieldError, FieldErrorsImpl, Merge, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const Container = styled.section`
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

  span,
  i {
    color: ${styleSet.colors.black};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const WithdrawalBtn = styled.button`
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
  border-bottom: ${(P: IStylesProps) =>
    P.error
      ? `2px solid ${styleSet.colors.red}`
      : `2px solid ${styleSet.colors.black}`};
  font-weight: 700;
  color: ${styleSet.colors.black};
`;

const REQUEST_POINT_REFUND = gql`
  mutation requestPointRefund($amount: Float!) {
    requestPointRefund(amount: $amount)
  }
`;

type IStylesProps = {
  isActive?: boolean;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};

const schema = yup.object({
  amount: yup.number().required("필수"),
});

export default function WithdrawalModal() {
  const [isActive, setActive] = useState(false);
  const [isChargeOpen, setIsChargeOpen] = useState(false);
  const { handleSubmit, register, formState, watch, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const router = useRouter();
  const { data: fetchUser } = useQuery(FETCH_USER);
  const [requestPointRefund] = useMutation(REQUEST_POINT_REFUND);

  const onClickOpen = () => {
    setIsChargeOpen((prev) => !prev);
  };

  useEffect(() => {
    getValues("amount") ? setActive(true) : setActive(false);
  }, [watch("amount")]);

  const onClickWithdrawal = async (data: any) => {
    try {
      const result = await requestPointRefund({
        variables: {
          ...data,
        },
      });
      if (result.data.requestPointRefund) SuccessModal("인출 신청 완료");
      onClickOpen();
      router.reload();
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  return (
    <>
      <Button onClick={onClickOpen}>
        <DollarOutlined />
        &nbsp; 인출하기
      </Button>
      {isChargeOpen && (
        <Background>
          <Container>
            <CloseWrapper>
              <CloseBtn type="button" onClick={onClickOpen}></CloseBtn>
            </CloseWrapper>
            <Title>인출할 포인트(금액)를 기입하세요.</Title>
            <span>
              인출 가능 포인트 : {PointFormatter(fetchUser?.fetchUser.point)} P
            </span>
            <form onSubmit={handleSubmit(onClickWithdrawal)}>
              <Input
                type="text"
                placeholder="포인트 입력"
                {...register("amount")}
                error={formState.errors.amount?.message}
              />
              {watch("amount") ? (
                <i>{PriceFormatter(Number(getValues("amount")))}</i>
              ) : null}
              <WithdrawalBtn isActive={isActive}>인출하기</WithdrawalBtn>
            </form>
          </Container>
        </Background>
      )}
    </>
  );
}
