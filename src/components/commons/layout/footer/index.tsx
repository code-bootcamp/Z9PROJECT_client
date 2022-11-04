import * as S from "../layout.styles";

export default function FooterPage() {
  return (
    <>
      <S.Footer>
        <S.Wrapper2>
          <S.TopBox>
            <S.Top className="none">
              <li>
                <strong>TEL :</strong>
                010 - 2725 - 2996
              </li>
              <li>
                <strong>EMAIL :</strong>
                tlsalduszz@gmail.com
              </li>
            </S.Top>

            <S.Top>
              <li>이용약관</li>
              <li>개인정보취급방침</li>
              <li>공지사항</li>
            </S.Top>
          </S.TopBox>

          <S.BottomBox>
            <S.Bottom>
              <li> 상호명 : 제로나인 대표자 : 제로나인</li>
              <li>주소 : 서울시 강남구 강남대로 1 전화번호 : 02-123-4567 </li>
              <li> Email : help@zero9.shop </li>
              <li>사업자 등록번호 : 111-88-22222</li>
            </S.Bottom>

            <S.Section>
              <p>
                <img src="/icon_insta.svg" alt="인스타그램 로고" />
              </p>
              <p>
                <img src="/icon_youtube.svg" alt="유튜브 로고" />
              </p>
            </S.Section>
          </S.BottomBox>
        </S.Wrapper2>
      </S.Footer>
    </>
  );
}
