import * as S from "./edit.styles";
import CountDown from "../../../commons/count";
import { IEditPresenterProps } from "./edit.types";
import ZipcodeModal from "../../../commons/modal/zipcode";
import Input01 from "../../../commons/input/input01/input01";
import Input03 from "../../../commons/input/input03/input03";
import Upload01 from "../../../commons/upload/upload01/upload01";
import Upload02 from "../../../commons/upload/upload02/upload02";

export default function EditPresenter(P: IEditPresenterProps) {
  const {
    register,
    openTime,
    setValue,
    formState,
    fetchUser,
    onClickMore,
    handleSubmit,
    onClickUpdate,
    profilePreview,
    onClickCertNumber,
    onClickCertConfirm,
    onClickNameConfirm,
    onChageProfileFile,
    onChangeCertifiFile,
  } = P;

  return (
    <S.Container>
      <S.SubTitle>회원정보 수정</S.SubTitle>
      <S.Form onSubmit={handleSubmit(onClickUpdate)}>
        <S.UploadWrapper>
          <S.ProfileWrapper>
            {profilePreview ? (
              <img src={profilePreview} alt="프로필이미지" />
            ) : fetchUser?.fetchUser.profileImg ? (
              <img src={fetchUser?.fetchUser.profileImg} alt="프로필이미지" />
            ) : (
              <img src="/test.jpeg" alt="기본이미지" />
            )}
          </S.ProfileWrapper>
          <Upload02 onChageProfileFile={onChageProfileFile} isEdit={true} />
        </S.UploadWrapper>

        <S.SubTitle className="h2">나의 정보</S.SubTitle>
        <S.RowWrapper>
          <S.RowTitle>닉네임</S.RowTitle>
          <S.Label>
            <Input01
              type="text"
              placeholder="변경할 닉네임을 적어주세요."
              register={register("nickname")}
              edit={true}
              defaultValue={fetchUser?.fetchUser.nickname}
            />
            <S.Btn1 type="button" onClick={onClickNameConfirm}>
              중복확인
            </S.Btn1>
          </S.Label>
        </S.RowWrapper>
        <S.RowWrapper className="line">
          <S.RowTitle>핸드폰번호</S.RowTitle>
          <S.InnerWrapper>
            <S.Label>
              <Input01
                type="text"
                placeholder="변경할 핸드폰 번호를 입력하세요."
                register={register("phoneNumber")}
                edit={true}
                defaultValue={fetchUser?.fetchUser.phoneNumber}
              />{" "}
              <S.Btn1 type="button" onClick={onClickCertNumber}>
                인증번호받기
              </S.Btn1>
            </S.Label>
            <S.Label>
              <Input01
                type="text"
                placeholder="인증번호를 입력하세요."
                register={register("keyNumber")}
                edit={true}
                error={formState.errors.keyNumber?.message}
              />
              {openTime && <CountDown min={3} sec={0} />}
              <S.Btn2 type="button" onClick={onClickCertConfirm}>
                인증번호확인
              </S.Btn2>
            </S.Label>
          </S.InnerWrapper>
        </S.RowWrapper>
        <S.RowWrapper className="line">
          <S.RowTitle>주소</S.RowTitle>
          <S.InnerWrapper>
            <S.Label>
              <Input01
                type="text"
                placeholder="주소 검색 버튼을 누르세요. 자동으로 채워집니다."
                register={register("zipcode")}
                edit={true}
                defaultValue={fetchUser?.fetchUser.zipcode}
              />
              <ZipcodeModal setValue={setValue} />
            </S.Label>
            <Input01
              type="text"
              placeholder="주소를 기입하세요."
              register={register("address")}
              edit={true}
              defaultValue={fetchUser?.fetchUser.address}
            />
            <Input01
              type="text"
              placeholder="상세 주소를 기입하세요."
              register={register("addressDetail")}
              edit={true}
              defaultValue={fetchUser?.fetchUser.addressDetail}
            />
          </S.InnerWrapper>
        </S.RowWrapper>
        {fetchUser?.fetchUser.userType === "CREATOR" ? (
          <>
            <S.RowWrapper className="line">
              <S.RowTitle>한줄소개</S.RowTitle>
              <S.InnerWrapper>
                <S.Introduce
                  placeholder="구매자에게 자신을 소개하세요."
                  defaultValue={fetchUser?.fetchUser.introduce}
                  {...register("introduce")}
                />
                <Input01
                  type="text"
                  placeholder="주 콘텐츠를 입력하세요. 예)브이로그, 뷰티, 게임"
                  register={register("mainContents")}
                  edit={true}
                  defaultValue={fetchUser?.fetchUser.mainContents}
                />
              </S.InnerWrapper>
            </S.RowWrapper>
            <S.RowWrapper className="line">
              <S.RowTitle>주 플랫폼</S.RowTitle>
              <S.SnsLabel>
                <S.SnsLabelInner>
                  <S.SnsCheckWrapper className="wrapper radio">
                    <S.LabelWrapper>
                      <S.RadioInput
                        type="radio"
                        value={"INSTAGRAM"}
                        {...register("snsChannel")}
                      />
                      <S.RadioPulse className="radio-pulse" />
                      <S.RadioButton className="radio-button" />
                      <S.RadioButtonInner className="radio-button-inner"></S.RadioButtonInner>
                      <S.RadioLabel className="radio-label">
                        인스타그램
                      </S.RadioLabel>
                    </S.LabelWrapper>
                    <S.LabelWrapper>
                      <S.RadioInput
                        type="radio"
                        value={"YOUTUBE"}
                        {...register("snsChannel")}
                      />
                      <S.RadioPulse className="radio-pulse" />
                      <S.RadioButton className="radio-button" />
                      <S.RadioButtonInner className="radio-button-inner"></S.RadioButtonInner>
                      <S.RadioLabel className="radio-label">
                        유튜버
                      </S.RadioLabel>
                    </S.LabelWrapper>
                  </S.SnsCheckWrapper>
                </S.SnsLabelInner>
                <S.SnsLabelInner>
                  <Input01
                    type="text"
                    placeholder="인스타그램 이름 또는 유튜브 채널명을 입력하세요."
                    register={register("snsId")}
                    edit={true}
                    error={formState.errors.snsId?.message}
                    defaultValue={fetchUser?.fetchUser.snsId}
                  />
                </S.SnsLabelInner>
                <Upload01
                  onChangeCertifiFile={onChangeCertifiFile}
                  defaultImg={fetchUser?.fetchUser.creatorAuthImg}
                />
              </S.SnsLabel>
            </S.RowWrapper>
          </>
        ) : null}

        <S.RowWrapper className="line">
          <S.RowTitle>계좌 정보</S.RowTitle>
          <S.BankWrapper>
            <Input01
              type="text"
              placeholder={
                fetchUser?.fetchUser.userType === "CREATOR"
                  ? "정산받을 계좌번호를 입력하세요."
                  : "인출할 계좌번호를 입력하세요."
              }
              register={register("account")}
              edit={true}
              defaultValue={fetchUser?.fetchUser.account}
            />
            <S.BankInner>
              <Input03
                type="text"
                placeholder="인출할 은행 코드를 입력하세요."
                register={register("bank")}
                edit={true}
                defaultValue={fetchUser?.fetchUser.bank}
                setValue={setValue}
              />
              <Input01
                type="text"
                placeholder="예금주 실명을 입력하세요."
                register={register("accountName")}
                edit={true}
                defaultValue={fetchUser?.fetchUser.accountName}
              />
            </S.BankInner>
          </S.BankWrapper>
        </S.RowWrapper>

        <S.LogInBtn>
          <span>수정완료</span>
        </S.LogInBtn>
        <S.DeleteBtn type="button" onClick={onClickMore}>
          탈퇴하기
        </S.DeleteBtn>
      </S.Form>
    </S.Container>
  );
}
