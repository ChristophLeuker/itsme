
import { ButtonContainer, StyledButton, TextContainer, Text} from "../cv";
import { HeaderWrapper, HeaderText } from "..";
import styled from "styled-components";
import Image from "next/image";

const StyledImage = styled(Image)`
  display: flex;
 border-radius: 20%;
`;

const PicContainer = styled.div`
display: flex`

const ContainerPic1 = styled.div`
display:flex;
margin-top:250px;
margin-left: 90px;
border-radius: 10%;
`
const ContainerPic2 = styled.div`
display:flex;
margin-top:150px;
margin-left: 80px;
`
const ContainerPic3 = styled.div`
display:flex;
margin-top:250px;
margin-left: 80px;
`

const ContainerPic4 = styled.div`
display:flex;
margin-top:150px;
margin-left: 80px;
`

export default function consultant({ }) {
  return (
    <>
      <HeaderWrapper>
      <HeaderText>This is me - Christoph Leuker</HeaderText>
      </HeaderWrapper>
      <TextContainer>
  <Text>Warum IT Consulting</Text>
</TextContainer>
<PicContainer>
      <ContainerPic1>
      <StyledImage src="/con1.jpg"
      alt="Consulting Bild"
      width={350}
      height={350}
      /></ContainerPic1>
         <ContainerPic2>
      <StyledImage src="/con2.jpg"
      alt="Con2 Bild"
      width={350}
      height={350}
      /></ContainerPic2>
         <ContainerPic3>
      <StyledImage src="/devops.png"
      alt="devops Bild"
      width={350}
      height={350}
      /></ContainerPic3>
       <ContainerPic4>
      <StyledImage src="/con3.jpg"
      alt="Con3 Bild"
      width={350}
      height={350}
      /></ContainerPic4>
      </PicContainer>


<ButtonContainer>
<StyledButton href={"/"}> Back </StyledButton>
</ButtonContainer>
    </>
  );
}
