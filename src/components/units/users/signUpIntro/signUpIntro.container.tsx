import styled from "@emotion/styled";
import Link from "next/link";
import { styleSet } from "../../../../commons/styles/styleSet";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const LinkTag = styled.a`
  width: 100%;
  height: 100%;
`;

const CreatorBtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 2rem;
  background: ${styleSet.colors.primary};
  color: white;
  span {
    font-size: 0.9rem;
  }
`;

const UserBtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: black;

  font-size: 2rem;
  span {
    font-size: 0.9rem;
  }
`;

export default function SignUpIntroContainer() {
  return (
    <Container>
      <Link href={"/users/signupintro/creator"}>
        <LinkTag>
          <CreatorBtn>
            <img src="/users/signupintro/img_bulb.png" />
            크리에이터
            <span>회원가입</span>
          </CreatorBtn>
        </LinkTag>
      </Link>
      <Link href={"/users/signupintro/user"}>
        <LinkTag>
          <UserBtn>
            <img src="/users/signupintro/img_register.png" />
            구매자
            <span>회원가입</span>
          </UserBtn>
        </LinkTag>
      </Link>
    </Container>
  );
}
