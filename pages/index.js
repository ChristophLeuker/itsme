import styled from "styled-components";
import Link from "next/link";


export const HeaderWrapper = styled.div`
  background-color: darkorange;
  color: white;
  padding: 20px;
  text-align: center;
`;

export const HeaderText = styled.h1`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 200px; /* Abstand nach oben anpassen */
`;

const StyledButton = styled(Link)`
  text-decoration: none;
  background-color: darkorange;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: red;
  }
`;


export default function HomePage() {
  return (
    <><HeaderWrapper>
      <HeaderText>This is me - Christoph Leuker</HeaderText>
      </HeaderWrapper>
            <ButtonContainer>
      <StyledButton href={"/cv"}>CV</StyledButton>
      <StyledButton href={"/consultant"}>CONSULTANT</StyledButton>
      <StyledButton href={"/skills"}>SKILLS</StyledButton>
    </ButtonContainer>
    </>
  );
}
