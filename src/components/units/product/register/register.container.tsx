import { BaseOptionType, DefaultOptionType } from "antd/lib/select";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import RegisterPresenter from "./register.presenter";

export default function RegisterContainer() {
  const { register, handleSubmit, formState, setValue, getValues } = useForm({
    mode: "onChange",
  });
  const [category, setCategory] = useState<string[]>([""]);
  const [option, setOption] = useState(0);
  const contentsRef = useRef<any>();

  const OptionPlus = () => {
    if (option === 4) return;
    setOption((prev) => prev + 1);
    console.log(option);
  };
  const OptionMinus = () => {
    if (option === 0) return;
    setOption((prev) => prev - 1);
    console.log(option);
  };

  const onChangeContents = () => {
    const text = contentsRef?.current?.getInstance().getHTML();
    setValue("contents", text === "<p><br><p>" ? "" : text);
  };

  const onChangeCategory = (
    value: unknown,
    option:
      | BaseOptionType
      | DefaultOptionType
      | (BaseOptionType | DefaultOptionType)[]
  ) => {
    switch (value) {
      case "smallAppliance":
        setCategory([
          "품명 및 모델명",
          "KC 인증 필 유무",
          "정격전압 및 소비전력",
          "출시년월",
          "제조자(수입자)",
          "제조국",
          "크기",
          "무게",
          "주요 사양",
          "품질보증기준",
          "A/S 책임자와 전화번호",
        ]);
        break;
      case "etc":
        setCategory([
          "품명 및 모델명",
          "인증/허가 사항",
          "제조국(원산지)",
          "제조자(수입자)",
          "소비자상담 관련 전화번호",
        ]);
        break;
      case "videoAppliance":
        setCategory([
          "품명 및 모델명",
          "KC 인증 필 유무",
          "정격전압 및 소비전력",
          "에너지소비효율등급",
          "출시년월",
          "제조자(수입자)",
          "제조국",
          "크기",
          "무게",
          "화면 사양",
          "품질보증기준",
          "A/S 책임자와 전화번호",
        ]);
        break;
      case "car":
        setCategory([
          "품명 및 모델명",
          "동일모델 출시년월",
          "KC 인증 필 유무 (자동차관리법에 따른 자기인증 대상 자동차부품에 한함)",
          "제조자(수입자)",
          "제조국",
          "크기",
          "적용차종",
          "제품사용으로 인한 위험 및 유의사항(연료절감장치에 한함)",
          "품질보증기준",
          "검사합격증 번호 (대기환경보전법에 따른 첨가제·촉매제에 한함)",
          "A/S 책임자와 전화번호",
        ]);
        break;
      case "bag":
        setCategory([
          "종류",
          "소재",
          "색상",
          "크기",
          "제조자(수입자)",
          "제조국",
          "취급시 주의사항",
          "품질보증기준",
          "A/S 책임자와 전화번호",
        ]);
        break;
      case "chemistry":
        setCategory([
          "품명 및 모델명",
          "용도(표백제의 경우 계열을 함께표시) 및 제형",
          "제조연월 및 유통기한(해당 없는 제품 생략 가능)",
          "중량, 용량, 매수",
          "효과, 효능(승인대상 제품에 한함)",
          "수입자(수입제품에 한함), 제조국 및 제조사",
          "어린이보호포장 대상제품 유무",
          "제품에 사용된 화학물질 명칭(주요물질, 보존제 등 관련 고시에 따른 표시의무 화학물질에 한함)",
          "사용상 주의사항",
          "안전기준 적합확인 신고번호(자가검사번호) 또는 안전확인대상 생활화학제품 승인번호",
          "소비자상담 관련 전화번호",
        ]);
        break;
      case "electronic":
        setCategory([
          "품명 및 모델명",
          "KC 인증 필 유무",
          "정격전압 및 소비전력",
          "에너지소비효율등급",
          "출시년월",
          "제조자(수입자)",
          "제조국",
          "크기",
          "품질보증기준",
          "A/S 책임자와 전화번호",
        ]);
        break;
      case "optics":
        setCategory([
          "품명 및 모델명",
          "KC 인증 필 유무",
          "출시년월",
          "제조자(수입자)",
          "제조국",
          "크기",
          "무게",
          "주요 사양",
          "품질보증기준",
          "A/S 책임자와 전화번호",
        ]);
        break;
      case "sports":
        setCategory([
          "품명 및 모델명",
          "크기, 중량",
          "색상",
          "재질",
          "제품 구성",
          "출시년월",
          "제조자(수입자)",
          "제조국",
          "상품별 세부 사양",
          "품질보증기준",
          "A/S 책임자와 전화번호",
        ]);
        break;
      case "etcPeriod":
        setCategory([
          "품명 및 모델명",
          "인증사항",
          "제조연월일, 유통기한 또는 품질유지기한",
          "제조국(원산지)",
          "제조자(수입자)",
          "소비자상담 관련 전화번호",
        ]);
        break;
      case "biocidal":
        setCategory([
          "제품명 및 제품유형",
          "중량 또는 용량 및 표준사용량",
          "효과, 효능",
          "사용대상자 및 사용범위",
          "수입자(수입제품에 한함), 제조국 및 제조사",
          "어린이보호포장 대상제품 유무",
          "살생물물질, 나노물질, 기타 화학물질(유해화학물질 또는 중점관리물질)의 명칭",
          "제품 유해성, 위해성 표시",
          "사용방법 및 사용상 주의사항",
          "승인번호",
          "소비자상담 관련 전화번호",
        ]);
        break;
    }
  };

  return (
    <RegisterPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      getValues={getValues}
      onChangeCategory={onChangeCategory}
      category={category}
      contentsRef={contentsRef}
      onChangeContents={onChangeContents}
      option={option}
      OptionPlus={OptionPlus}
      OptionMinus={OptionMinus}
    />
  );
}
