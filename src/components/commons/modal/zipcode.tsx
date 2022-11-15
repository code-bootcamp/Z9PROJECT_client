import { Modal } from "antd";
import { useState } from "react";
import styled from "@emotion/styled";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { styleSet } from "../../../commons/styles/styleSet";
import { FieldValues, UseFormSetValue } from "react-hook-form";

export const Button = styled.button`
  width: 150px;
  height: 60px;
  background: ${styleSet.colors.subcolor2};
  border-radius: 10px;
  color: ${styleSet.colors.white};
  position: relative;
  overflow: hidden;

  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: ${styleSet.colors.aftercolor};
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

export type IZipcodeModalP = {
  setValue: UseFormSetValue<FieldValues>;
};

const ZipcodeModal = (P: IZipcodeModalP) => {
  const { setValue } = P;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModalToggle = () => {
    setIsModalOpen((toggle) => !toggle);
  };

  const handleComplete = (address: Address) => {
    setValue("zipcode", address.zonecode);
    setValue("address", address.address);
    setValue("addressDetail", address.buildingName);
    onClickModalToggle();
  };

  return (
    <>
      <Button type="button" onClick={onClickModalToggle}>
        <span>주소검색</span>
      </Button>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onOk={onClickModalToggle}
          onCancel={onClickModalToggle}
          centered
        >
          <DaumPostcodeEmbed
            onComplete={handleComplete}
            style={{ margin: "20px 0 0 0", height: 450 }}
          />
        </Modal>
      )}
    </>
  );
};

export default ZipcodeModal;
