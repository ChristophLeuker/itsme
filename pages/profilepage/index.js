import Link from "next/link";
import { Headline, StyledBackbutton } from "../Game501/game";
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
  padding: 10px;
`;

const WelcomeText = styled.p`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  justify-self: center;
  font-size: 2rem;
  text-align: center;
  width: 90%;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 125px;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledButton = styled.button`
  background: var(--button-color);
  background: linear-gradient(var(--button-color), var(--button-color-second));
  border-radius: 11px;
  width: 150px;
  height: 130px;

  display: inline-block;
  cursor: pointer;
  text-align: center;

  bottom: 10px;
  right: 10px;
  margin-top: 20px;
  grid-column: 1 / span 2;
  justify-self: center;
`;
const ButtonText = styled.p`
  font-size: 2rem;
  color: white;
`;
export default function NoProfileFound() {
  return (
    <>
      <Headline>Personal profile page</Headline>
      <Container>
        <WelcomeText>Please log in to see your Profile</WelcomeText>
        <ButtonContainer>
          <Link href={"/login"}>
            <StyledButton>
              <ButtonText>To Login Page</ButtonText>
            </StyledButton>
          </Link>
        </ButtonContainer>
      </Container>
      <Link href={"/"}>
        <StyledBackbutton>Back to Main</StyledBackbutton>
      </Link>
    </>
  );
}
