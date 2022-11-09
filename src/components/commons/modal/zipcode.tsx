import { Modal } from "antd";
import { useState } from "react";
import styled from "@emotion/styled";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { styleSet } from "../../../commons/styles/styleSet";
import { FieldValues, UseFormSetValue } from "react-hook-form";

export const Button = styled.button`
  width: 150px;
  height: 60px;
  color: white;
  background: ${styleSet.colors.subcolor2};
  border-radius: 10px;
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
      <Button onClick={onClickModalToggle}>우편번호 검색</Button>
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
