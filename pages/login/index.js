import { useSession, signIn, signOut } from "next-auth/react";
import { Headline, StyledBackbutton } from "../Game501/game";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  flex-direction: column;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    var(--background-color) 50%,
    var(--button-color) 50%
  );
  background-size: 100% 4px;
  background-repeat: repeat-y;
  border: solid black 2px;
  height: 400px;
  width: 80%;
  gap: 10px;
  border-radius: 20px;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
`;

const LogInButton = styled.button`
  background: var(--button-color);
  background: linear-gradient(var(--button-color), var(--button-color-second));
  border-radius: 500px;
  height: 14rem;
  width: 14rem;
  align-self: center;
`;

const LogInText = styled.p`
  text-align: center;
`;

const LogInHead = styled.h2`
  text-align: center;
`;

const ButtonText = styled.p`
  font-size: 3rem;
`;
export default function LogInTest() {
  const { data: session } = useSession();
  return (
    <>
      <Headline>Log In</Headline>
      <Container>
        <LogInHead>Log In:</LogInHead>
        {session ? (
          <>
            <LogInButton type="button" onClick={signOut}>
              <ButtonText>Push to log out</ButtonText>
            </LogInButton>
            <LogInText>You are sign in as {session.user.email}</LogInText>
          </>
        ) : (
          <>
            <LogInButton type="button" onClick={() => signIn("github")}>
              <ButtonText>Push to log in</ButtonText>
            </LogInButton>
            <LogInText>Please log in to verify yourself.</LogInText>
          </>
        )}
      </Container>
      <Link href={"/"}>
        <StyledBackbutton>Back</StyledBackbutton>
      </Link>
    </>
  );
}
