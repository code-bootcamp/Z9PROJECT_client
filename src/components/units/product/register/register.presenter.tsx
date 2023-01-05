import { DatePicker } from "antd";
import dynamic from "next/dynamic";
import * as S from "./register.styles";
import ImgDropzone from "./atom/dropzone";
import { HexColorPicker } from "react-colorful";
import { selectCategory } from "./atom/category";
import { IRegisterPresenterProps } from "./register.types";
import UseCreator from "../../../commons/hooks/useCreator";
import Input02 from "../../../commons/input/input02/input02";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils";
const EditorPage = dynamic(async () => await import("./atom/editor"), {
  ssr: false,
});

export default function RegisterPresenter(P: IRegisterPresenterProps) {
  const {
    isEdit,
    register,
    handleSubmit,
    getValues,
    onChangeCategory,
    category,
    contentsRef,
    nameRef,
    onChangeContents,
    option,
    optionEntity,
    selectDate,
    onClickCreate,
    onClickUpdate,
    onDropImg,
    watch,
    fetchProduct,
    bgColor,
    textColor,
    onChangebgColor,
    onChangeTextColor,
  } = P;
  const { RangePicker } = DatePicker;
  UseCreator();

  return (
    <S.Container>
      <form
        onSubmit={
          isEdit ? handleSubmit(onClickUpdate) : handleSubmit(onClickCreate)
        }
      >
        <S.Title>{isEdit ? "상품 수정 " : "상품 등록"}</S.Title>
        <S.TypeWrapper>
          <S.Item>
            <S.SubTitle>상품명</S.SubTitle>
            <Input02
              type="text"
              placeholder="노출상품명 입력(권장 : 크리에이터명 + 브랜드명 + 제품명)"
              register={register("name")}
              ref={nameRef}
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
              <S.OptionPlusBtn type="button" onClick={optionEntity("plus")}>
                +
              </S.OptionPlusBtn>
              <S.OptionMinuBtn type="button" onClick={optionEntity("minus")}>
                -
              </S.OptionMinuBtn>
            </S.OptionWrapper>
            {new Array(option).fill(1).map((_, i) => (
              <Input02
                type="text"
                placeholder="없으면 빈 칸"
                register={register(`option${i + 2}`)}
                key={i}
              />
            ))}
          </S.Item>
          <S.Item>
            <S.SubTitle>판매 기간</S.SubTitle>
            <RangePicker
              onChange={selectDate}
              placeholder={
                isEdit
                  ? [
                      dateFormatter(getValues("validFrom")),
                      dateFormatter(getValues("validUntil")),
                    ]
                  : ["시작 날짜", "종료 날짜"]
              }
            />
          </S.Item>
          <S.Item>
            <S.SubTitle>
              원가<span>&nbsp;(단위:원)</span>
            </S.SubTitle>
            <Input02
              type="text"
              placeholder="예) 100000"
              register={register("originPrice")}
            />
            {watch("originPrice") ? (
              <i>{PriceFormatter(Number(getValues("originPrice")))}</i>
            ) : null}
          </S.Item>
          <S.Item>
            <S.SubTitle>
              할인가<span>&nbsp;(단위:원)</span>
            </S.SubTitle>
            <Input02
              type="text"
              placeholder="예) 100000"
              register={register("discountPrice")}
            />
            {watch("discountPrice") ? (
              <i>{PriceFormatter(Number(getValues("discountPrice")))}</i>
            ) : null}
          </S.Item>
          <S.Item>
            <S.SubTitle>
              판매 수량<span>&nbsp;(단위:개)</span>
            </S.SubTitle>
            <Input02
              type="text"
              placeholder="예) 100"
              register={register("originalQuantity")}
            />
          </S.Item>
          <S.Item>
            <S.SubTitle>유튜브 링크</S.SubTitle>
            <Input02
              type="text"
              placeholder="예) https://www.youtube.com/watch?v=KVZ-P-ZI6W4"
              register={register("youtubeLink")}
            />
          </S.Item>
          <S.Item>
            <S.SubTitle>
              상품 이미지<span>&nbsp;(최대 4개)</span>
            </S.SubTitle>
            <ImgDropzone
              onDropImg={onDropImg}
              fetchImg={fetchProduct?.fetchProduct.images}
            />
          </S.Item>
          <S.Item>
            <S.SubTitle>상세 설명</S.SubTitle>
            <div style={{ width: "100%" }}>
              {fetchProduct?.fetchProduct.content ? (
                <EditorPage
                  contentsRef={contentsRef}
                  onChangeContents={onChangeContents}
                  initialValue={fetchProduct?.fetchProduct.content}
                />
              ) : isEdit ? (
                <div>loadding...</div>
              ) : (
                <EditorPage
                  contentsRef={contentsRef}
                  onChangeContents={onChangeContents}
                  initialValue={fetchProduct?.fetchProduct.content}
                />
              )}
            </div>
          </S.Item>
          <S.Item>
            <S.SubTitle>스킨 선택</S.SubTitle>
            <S.CheckWrapper className="wrapper">
              <S.LabelWrapper>
                <S.RadioInput type="radio" value={"1"} {...register("skin")} />
                <S.RadioPulse className="radio-pulse" />
                <S.RadioButton className="radio-button" />
                <S.RadioButtonInner className="radio-button-inner"></S.RadioButtonInner>
                <S.RadioLabel className="radio-label">기본</S.RadioLabel>
              </S.LabelWrapper>
              <S.LabelWrapper>
                <S.RadioInput type="radio" value={"2"} {...register("skin")} />
                <S.RadioPulse className="radio-pulse" />
                <S.RadioButton className="radio-button" />
                <S.RadioButtonInner className="radio-button-inner"></S.RadioButtonInner>
                <S.RadioLabel className="radio-label">크리에이터</S.RadioLabel>
              </S.LabelWrapper>
              <S.LabelWrapper>
                <S.RadioInput type="radio" value={"3"} {...register("skin")} />
                <S.RadioPulse className="radio-pulse" />
                <S.RadioButton className="radio-button" />
                <S.RadioButtonInner className="radio-button-inner"></S.RadioButtonInner>
                <S.RadioLabel className="radio-label">영상</S.RadioLabel>
              </S.LabelWrapper>
            </S.CheckWrapper>
            {watch("skin") === "2" ? (
              <S.ColorWrapper>
                <HexColorPicker
                  color={textColor}
                  onChange={onChangeTextColor}
                />
                <S.ColorInner>
                  <div>글자</div>
                  <S.ColorPreview color={textColor}></S.ColorPreview>
                </S.ColorInner>
                <S.ColorInner>
                  <div>배경</div>
                  <S.ColorPreview color={bgColor}></S.ColorPreview>
                </S.ColorInner>
                <HexColorPicker color={bgColor} onChange={onChangebgColor} />
              </S.ColorWrapper>
            ) : null}
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
            defaultValue={isEdit ? getValues("info.type") : "default"}
            onChange={onChangeCategory}
            options={selectCategory}
          />
          <S.CategoryWrapper>
            {category.map((el, i) => (
              <S.SubWrapper key={i}>
                <S.CategoryTitle>{el || "카테고리"}</S.CategoryTitle>{" "}
                <Input02
                  type="text"
                  placeholder=""
                  register={register(`info.option${i + 1}`)}
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
              register={register("shopName")}
            />
          </S.SubWrapper>
          <S.SubWrapper>
            <S.SubSubTitle>대표자</S.SubSubTitle>
            <Input02
              type="text"
              placeholder="대표 이름을 임력하세요."
              register={register("ceo")}
            />
          </S.SubWrapper>
          <S.SubWrapper>
            <S.SubSubTitle>사업자등록번호</S.SubSubTitle>
            <Input02
              type="text"
              placeholder="사업자등록번호를 입력하세요."
              register={register("brn")}
            />
          </S.SubWrapper>
          <S.SubWrapper>
            <S.SubSubTitle>통신판매업신고</S.SubSubTitle>
            <Input02
              type="text"
              placeholder="사업자등록번호를 입력하세요."
              register={register("mobn")}
            />
          </S.SubWrapper>
        </S.TypeWrapper>
        <S.BottomText>
          잠깐! 모든 항목을 입력하셨나요?
          <div>모든 항목을 기입해야 상품 등록됩니다:)</div>
        </S.BottomText>
        <S.SubmitBtn>
          <span>{isEdit ? "수정하기" : "등록하기"}</span>
        </S.SubmitBtn>
      </form>
    </S.Container>
  );
}
