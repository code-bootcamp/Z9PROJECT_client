import Input01 from "../../../commons/input/input01/input01";
import Upload01 from "../../../commons/upload/upload01/upload01";
import Upload02 from "../../../commons/upload/upload02/upload02";
import * as S from "./edit.styles";
import { IEditPresenterProps } from "./edit.types";

export default function EditPresenter(P: IEditPresenterProps) {
  const {
    register,
    handleSubmit,
    formState,
    certifiFetchUrl,
    onChangeCertifiFile,
    onChageProfileFile,
    profilePreview,
    profileFetchUrl,
  } = P;
  return (
    <S.Container>
      <S.SubTitle>회원정보 수정</S.SubTitle>
      <S.Form>
        <S.UploadWrapper>
          <S.ProfileWrapper>
            {profilePreview ? (
              <img src={profilePreview} alt="프로필이미지" />
            ) : (
              <img src="/test.jpeg" alt="기본이미지" />
            )}
          </S.ProfileWrapper>
          <Upload02
            onChageProfileFile={onChageProfileFile}
            profileFetchUrl={profileFetchUrl}
          />
        </S.UploadWrapper>

        <S.SubTitle className="h2">나의 정보</S.SubTitle>
        <S.RowWrapper>
          <S.RowTitle>닉네임</S.RowTitle>
          <Input01
            type="text"
            placeholder="변경할 닉네임을 적어주세요."
            register={register("name")}
            edit={true}
          />
        </S.RowWrapper>
        <S.RowWrapper>
          <S.RowTitle>핸드폰번호</S.RowTitle>
          <Input01
            type="text"
            placeholder="변경할 핸드폰 번호를 적고 인증 받으세요."
            register={register("phoneNumber")}
            edit={true}
          />
        </S.RowWrapper>
        <S.RowWrapper className="line">
          <S.RowTitle>주소</S.RowTitle>
          <S.AddressWrapper>
            <S.Label>
              <Input01
                type="text"
                placeholder="주소 검색 버튼을 누르세요. 자동으로 채워집니다."
                register={register("zipcode")}
                edit={true}
              />{" "}
              <S.ZipcodeBtn type="button">
                <span>주소검색</span>
              </S.ZipcodeBtn>
            </S.Label>
            <Input01
              type="text"
              placeholder="주소를 기입하세요."
              register={register("address")}
              edit={true}
            />
            <Input01
              type="text"
              placeholder="상세 주소를 기입하세요."
              register={register("addressDetail")}
              edit={true}
            />
          </S.AddressWrapper>
        </S.RowWrapper>
        <S.RowWrapper className="line">
          <S.RowTitle>한줄소개</S.RowTitle>
          <S.Introduce
            placeholder="구매자에게 자신을 소개하세요."
            {...register("introduce")}
          />
        </S.RowWrapper>

        <S.RowWrapper className="line">
          <S.RowTitle>주 플랫폼</S.RowTitle>

          <S.SnsLabel>
            <S.SnsLabelInner>
              <S.SnsCheckWrapper className="wrapper radio">
                <S.LabelWrapper>
                  <S.RadioInput type="radio" name="sns" />
                  <S.RadioPulse className="radio-pulse" />
                  <S.RadioButton className="radio-button" />
                  <S.RadioButtonInner className="radio-button-inner"></S.RadioButtonInner>
                  <S.RadioLabel className="radio-label">
                    인스타그램
                  </S.RadioLabel>
                </S.LabelWrapper>
                <S.LabelWrapper>
                  <S.RadioInput type="radio" name="sns" />
                  <S.RadioPulse className="radio-pulse" />
                  <S.RadioButton className="radio-button" />
                  <S.RadioButtonInner className="radio-button-inner"></S.RadioButtonInner>
                  <S.RadioLabel className="radio-label">유튜버</S.RadioLabel>
                </S.LabelWrapper>
              </S.SnsCheckWrapper>
            </S.SnsLabelInner>
            <S.SnsLabelInner>
              <Input01
                type="text"
                placeholder="인스타그램 이름 또는 유튜브 채널명을 입력하세요."
                register={register("creator")}
                edit={true}
                error={formState.errors.creator?.message}
              />
            </S.SnsLabelInner>

            <Upload01
              onChangeCertifiFile={onChangeCertifiFile}
              certifiFetchUrl={certifiFetchUrl}
            />
          </S.SnsLabel>
        </S.RowWrapper>
        <S.RowWrapper className="line">
          <S.RowTitle>계좌 정보</S.RowTitle>
          <S.BankWrapper>
            <Input01
              type="text"
              placeholder="정산받을 계좌번호를 입력하세요."
              register={register("count")}
              edit={true}
            />
            <S.BankInner>
              <Input01
                type="text"
                placeholder="은행을 입력하세요."
                register={register("bank")}
                edit={true}
              />
              <Input01
                type="text"
                placeholder="예금주 실명을 입력하세요."
                register={register("countName")}
                edit={true}
              />
            </S.BankInner>
          </S.BankWrapper>
        </S.RowWrapper>

        <S.LogInBtn>
          <span>수정완료</span>
        </S.LogInBtn>
      </S.Form>
    </S.Container>
  );
}
