import styled from "@emotion/styled";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { styleSet } from "../../../commons/styles/styleSet";
import { BankOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Modal = styled.section`
  width: 600px;
  /* height: 100%; */
  background: ${styleSet.colors.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${styleSet.colors.darkgray};
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  z-index: 11;
  box-shadow: 0 8px 20px rgb(0 0 0 / 5%);
`;

const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s3};
  font-family: ${styleSet.font.B};
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SubmitBtn = styled.button`
  width: 32%;
  height: 40px;
  font-size: ${styleSet.fontSize.s8};
  border: 1px solid ${styleSet.colors.black};
  position: relative;
  color: ${styleSet.colors.black};
  overflow: hidden;
  background: ${styleSet.colors.white};
  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: ${styleSet.colors.primary};
    transition: all 0.3s ease;
    transform: skewX(15deg);
  }
  &&:hover {
    color: #fff;
    border: 1px solid ${styleSet.colors.primary};
    ::before {
      width: 120%;
    }
  }
  span {
    display: block;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }
`;

const ChangeBtn = styled.button`
  width: 100%;
  height: 40px;
  font-size: ${styleSet.fontSize.s8};
  border: 1px solid ${styleSet.colors.black};
  position: relative;
  color: ${styleSet.colors.black};
  overflow: hidden;
  background: ${styleSet.colors.white};
  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: ${styleSet.colors.black};
    transition: all 0.3s ease;
    transform: skewX(15deg);
  }
  &&:hover {
    color: #fff;
    ::before {
      width: 120%;
    }
  }
  span {
    display: block;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }
`;

const BgLayer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Close = styled(CloseCircleOutlined)`
  position: absolute;
  right: 5%;
  top: 5%;
  font-size: ${styleSet.fontSize.s6};
  color: ${styleSet.colors.black};
  cursor: pointer;
`;

const Btn = styled.button`
  width: 150px;
  height: 60px;
  color: white;
  background: ${styleSet.colors.subcolor2};
  border-radius: 10px;
`;

type IBankCodeModalPorps = {
  setBankCode: Dispatch<SetStateAction<string | null>>;
};

export default function BankCodeModal(P: IBankCodeModalPorps) {
  const { setBankCode } = P;
  const [isOpen, setIsOpen] = useState(false);
  const [listChange, setListChange] = useState(false);
  const bankList = [
    { name: "KB국민은행", code: "004" },
    { name: "SC제일은행", code: "023" },
    { name: "경남은행", code: "039" },
    { name: "광주은행", code: "034" },
    { name: "기업은행", code: "003" },
    { name: "농협", code: "011" },
    { name: "대구은행", code: "031" },
    { name: "부산은행", code: "032" },
    { name: "산업은행", code: "002" },
    { name: "수협", code: "007" },
    { name: "신한은행", code: "088" },
    { name: "신협", code: "048" },
    { name: "외환은행", code: "005" },
    { name: "우리은행", code: "020" },
    { name: "우체국", code: "071" },
    { name: "전북은행", code: "037" },
    { name: "제주은행", code: "035" },
    { name: "하나은행", code: "081" },
    { name: "한국씨티은행", code: "027" },
    { name: "K뱅크", code: "089" },
    { name: "카카오뱅크", code: "090" },
  ];
  const stockList = [
    { name: "유안타증권", code: "209" },
    { name: "현대증권", code: "218" },
    { name: "미래에셋증권", code: "089" },
    { name: "대우증권", code: "238" },
    { name: "삼성증권", code: "240" },
    { name: "한국투자증권", code: "243" },
    { name: "NH투자증권", code: "247" },
    { name: "교보증권", code: "261" },
    { name: "하이투자증권", code: "262" },
    { name: "에이치엠씨투자증권", code: "263" },
    { name: "키움증권", code: "264" },
    { name: "이트레이드증권", code: "265" },
    { name: "에스케이증권", code: "266" },
    { name: "대신증권", code: "267" },
    { name: "솔로몬투자증권", code: "268" },
    { name: "한화증권", code: "269" },
    { name: "하나대투증권", code: "270" },
    { name: "굿모닝신한증권", code: "278" },
    { name: "동부증권", code: "279" },
    { name: "유진투자증권", code: "280" },
    { name: "메리츠증권", code: "287" },
    { name: "엔에이치투자증권", code: "289" },
    { name: "부국증권", code: "290" },
  ];

  const onClickModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickBank = (code: string) => () => {
    setBankCode(code);
    onClickModal();
  };

  const onClickListChange = () => {
    setListChange((prev) => !prev);
  };

  return (
    <>
      <Btn type="button" onClick={onClickModal}>
        은행코드 선택
      </Btn>
      {isOpen && (
        <>
          <BgLayer></BgLayer>
          <Modal>
            <Close onClick={onClickModal} />
            <H1>
              <BankOutlined /> 은행 선택{" "}
            </H1>
            <BtnWrapper>
              {listChange
                ? bankList.map((el) => (
                    <SubmitBtn type="button" onClick={onClickBank(el.code)}>
                      <span>{el.name}</span>
                    </SubmitBtn>
                  ))
                : stockList.map((el) => (
                    <SubmitBtn type="button" onClick={onClickBank(el.code)}>
                      <span>{el.name}</span>
                    </SubmitBtn>
                  ))}
            </BtnWrapper>
            <ChangeBtn type="button" onClick={onClickListChange}>
              <span>{!listChange ? "증권사 목록" : "은행 목록"}</span>
            </ChangeBtn>
          </Modal>
        </>
      )}
    </>
  );
}
