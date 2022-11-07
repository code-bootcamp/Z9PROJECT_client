import { DatePicker, Select } from "antd";
import * as S from "./register.styles";
import { IRegisterPresenterProps } from "./register.types";
import Input02 from "../../../commons/input/input02/input02";
import dynamic from "next/dynamic";
const EditorPage = dynamic(() => import("./register.editor"), {
  ssr: false,
});
import ImgDropzone from "./register.dropzone";
import Dropzone from "react-dropzone";

export default function RegisterPresenter(P: IRegisterPresenterProps) {
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    onChangeCategory,
    category,
    contentsRef,
    onChangeContents,
    option,
    OptionPlus,
    OptionMinus,
  } = P;
  const { RangePicker } = DatePicker;

  return (
    <S.Container>
      <S.Title>{false ? "상품 수정 " : "상품 등록"}</S.Title>
      <S.TypeWrapper>
        <S.Item>
          <S.SubTitle>상품명</S.SubTitle>
          <Input02
            type="text"
            placeholder="노출상품명 입력(권장 : 크리에이터명 + 브랜드명 + 제품명)"
            register={register("name")}
          />
        </S.Item>
        <S.Item>
          <S.SubTitle>
            옵션
            <span>&nbsp;최대 5개</span>
          </S.SubTitle>
          <S.OptionWrapper>
            <Input02
              type="text"
              placeholder="없으면 빈 칸"
              register={register("option1")}
            />
            <S.OptionPlusBtn onClick={OptionPlus}>+</S.OptionPlusBtn>
            <S.OptionMinuBtn onClick={OptionMinus}>-</S.OptionMinuBtn>
          </S.OptionWrapper>
          {new Array(option).fill(1).map((el, i) => (
            <Input02
              type="text"
              placeholder="없으면 빈 칸"
              register={register(`option${i + 2}`)}
            />
          ))}
        </S.Item>
        <S.Item>
          <S.SubTitle>판매 기간</S.SubTitle>
          <RangePicker />
        </S.Item>
        <S.Item>
          <S.SubTitle>판매가</S.SubTitle>
          <Input02
            type="text"
            placeholder="예) 100000"
            register={register("price")}
          />
        </S.Item>
        <S.Item>
          <S.SubTitle>
            할인율<span>&nbsp;(단위:%)</span>
          </S.SubTitle>
          <Input02
            type="text"
            placeholder="예) 20"
            register={register("discount")}
          />
        </S.Item>
        <S.Item>
          <S.SubTitle>유튜브 링크</S.SubTitle>
          <Input02
            type="text"
            placeholder="예) https://www.youtube.com/watch?v=KVZ-P-ZI6W4"
            register={register("youtube")}
          />
        </S.Item>
        <S.Item>
          <S.SubTitle>
            상품 이미지<span>&nbsp;(최대 4개)</span>
          </S.SubTitle>
          <ImgDropzone />
          {/* <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone> */}
        </S.Item>
        <S.Item>
          <S.SubTitle>상세 설명</S.SubTitle>
          <div style={{ width: "100%" }}>
            <EditorPage
              contentsRef={contentsRef}
              onChangeContents={onChangeContents}
              initialValue={"주소"}
            />
          </div>
        </S.Item>
      </S.TypeWrapper>
      <S.TypeWrapper>
        <S.SubTitle>
          상품정보제공고시
          <span>
            &nbsp;(각 카테고리에 해당하는 상품 고시정보를 선택하여
            입력해주세요.)
          </span>
        </S.SubTitle>
        <S.CategorySelect
          defaultValue="default"
          onChange={onChangeCategory}
          options={[
            {
              value: "default",
              disabled: true,
              label: "선택하세요",
            },
            {
              value: "smallAppliance",
              label: "소형전자(MP3/전자사전 등)",
            },
            {
              value: "etc",
              label: "기타 재화",
            },
            {
              value: "videoAppliance",
              label: "영상가전류(TV류)",
            },
            {
              value: "car",
              label: "자동차용품(자동차부품/기타 자동차용품)",
            },
            {
              value: "bag",
              label: "가방",
            },
            {
              value: "chemistry",
              label: "생활화학제품",
            },
            {
              value: "electronic",
              label: "가정용 전기제품(냉장고/새탁기/식기세척기/전자레인지 등)",
            },
            {
              value: "optics",
              label: "광학기기(디지털카메라/캠코더 등)",
            },
            {
              value: "sports",
              label: "스포츠용품",
            },
            {
              value: "etcPeriod",
              label: "기타 재화(유통기간)",
            },
            {
              value: "biocidal",
              label: "살생물제품",
            },
          ]}
        />
        <S.CategoryWrapper>
          {category.map((el, i) => (
            <S.SubWrapper>
              <S.CategoryTitle>{el ? el : "카테고리"}</S.CategoryTitle>{" "}
              <Input02
                type="text"
                placeholder=""
                register={register(`info.${i}`)}
              />
            </S.SubWrapper>
          ))}
        </S.CategoryWrapper>
      </S.TypeWrapper>
      <S.TypeWrapper>
        <S.SubTitle>판매자정보</S.SubTitle>
        <S.SubWrapper>
          <S.SubSubTitle>상호</S.SubSubTitle>
          <Input02
            type="text"
            placeholder="제품 판매자 상호를 입력하세요."
            register={register("seller.shop")}
          />
        </S.SubWrapper>
        <S.SubWrapper>
          <S.SubSubTitle>대표자</S.SubSubTitle>
          <Input02
            type="text"
            placeholder="대표 이름을 임력하세요."
            register={register("seller.name")}
          />
        </S.SubWrapper>
        <S.SubWrapper>
          <S.SubSubTitle>사업자등록번호</S.SubSubTitle>
          <Input02
            type="text"
            placeholder="사업자등록번호를 입력하세요."
            register={register("seller.businessNumber")}
          />
        </S.SubWrapper>
        <S.SubWrapper>
          <S.SubSubTitle>통신판매업신고</S.SubSubTitle>
          <Input02
            type="text"
            placeholder="사업자등록번호를 입력하세요."
            register={register("seller.mailBusinessNumber")}
          />
        </S.SubWrapper>
      </S.TypeWrapper>
      <S.SubmitBtn>{false ? "상품 수정 " : "상품 등록"}</S.SubmitBtn>
    </S.Container>
  );
}
