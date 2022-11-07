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
        <S.UpoloadWrapper>
          <S.ProfileWrapper>
            {profilePreview ? (
              <img src={profilePreview} alt="프로필이미지" />
            ) : (
              <img src="/users/user/img_id.svg" alt="기본이미지" />
            )}
          </S.ProfileWrapper>
          <Upload02
            onChageProfileFile={onChageProfileFile}
            profileFetchUrl={profileFetchUrl}
          />
        </S.UpoloadWrapper>
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
          <S.RowTitle>자기소개</S.RowTitle>
          <S.Introduce {...register("introduce")} />
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
        <S.RowWrapper>
          <S.RowTitle>주소</S.RowTitle>
          <S.AddressWrapper>
            <S.Label>
              <Input01
                type="text"
                placeholder="주소 검색 버튼을 누르세요. 자동으로 채워집니다."
                register={register("zipcode")}
                edit={true}
              />{" "}
              <S.ZipcodeBtn type="button">주소검색</S.ZipcodeBtn>
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

        <S.InfoWrapper>
          <S.SubTitle>크리에이터 추가정보</S.SubTitle>
          <S.SnsLabel>
            <S.SnsLabelInner>
              <Input01
                type="text"
                placeholder="인스타그램 이름 또는 유튜브 채널명을 입력하세요."
                register={register("creator")}
                edit={true}
                //   error={formState.errors.creator?.message}
              />
            </S.SnsLabelInner>
            <S.SnsLabelInner>
              <S.SnsCheckWrapper className="wrapper">
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
            <Upload01
              onChangeCertifiFile={onChangeCertifiFile}
              certifiFetchUrl={certifiFetchUrl}
            />
          </S.SnsLabel>
          <S.BackWrapper>
            <Input01
              type="text"
              placeholder="예) 지구은행"
              register={register("bank")}
              edit={true}
            />
            <Input01
              type="text"
              placeholder="계좌번호"
              register={register("count")}
              edit={true}
            />
          </S.BackWrapper>
        </S.InfoWrapper>
        <S.LogInBtn>수정</S.LogInBtn>
      </S.Form>
    </S.Container>
  );
}
