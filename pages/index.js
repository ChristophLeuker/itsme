
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";


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
  margin-top: 100px; /* Abstand nach oben anpassen */
`;

const StyledButton = styled(Link)`
  text-decoration: none;
  background-color: darkorange;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  transition: background-color 0.3s ease;
font-size: 3rem;
  &:hover {
    background-color: red;
  }
`;

const StyledImage = styled(Image)`
  display: flex;
 border-radius: 20%;
`;

const ContainerPic = styled.div`
display:flex;
margin-top:50px;
margin-left: 490px;
border-radius: 10%;
`

const ContainerPic2 = styled.div`
display:flex;
margin-top:-400px;
margin-left: 1200px;
border-radius: 10%;
`


export default function HomePage() {
  return (
    <><HeaderWrapper>
      <HeaderText>This is me - Christoph Leuker</HeaderText>
      </HeaderWrapper>
            <ButtonContainer>
      <StyledButton href={"/cv"}>Was bisher geschah</StyledButton>
      <StyledButton href={"/consultant"}>Warum IT Consultant</StyledButton>
      <StyledButton href={"/skills"}>Meine Skills</StyledButton>
    </ButtonContainer>
    <ContainerPic>
    <StyledImage src="/me.jpg"
      alt="Selbst Bild"
      width={350}
      height={450}
      />
    </ContainerPic>
    <ContainerPic2>
    <StyledImage src="/Computacenter.png"
      alt="CC Bild"
      width={350}
      height={350}
      />
    </ContainerPic2>
    </>
  );
}
