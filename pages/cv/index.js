
import styled from "styled-components";
import Link from "next/link";
import { HeaderWrapper, HeaderText } from "..";
import Image from "next/image";



export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px; /* Abstand zum unteren Rand */
  right: 20px; /* Abstand zum rechten Rand */
  text-align: center;
`;

export const StyledButton = styled(Link)`
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

export const TextContainer = styled.div`
  background-color: darkorange;
  padding: 20px;
  position: absolute;
  top: 100px; /* Anpassen, um die vertikale Position zu ändern */
  left: 50px; /* Anpassen, um die horizontale Position zu ändern */
  border-radius: 20%;
`;

export const Text = styled.h2`
  color: white;
  margin: 0;
  font-size: 2rem;
`;

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
const Timeline = styled.div`
display: flex;
margin-top:20px;
margin-left: 200px;


`

export default function cv() {
  return (
    <>
     
     <HeaderWrapper>
      <HeaderText>This is me - Christoph Leuker</HeaderText>
      </HeaderWrapper>
<TextContainer>
  <Text>Meine bisherige Laufbahn</Text>
</TextContainer>
      <PicContainer>
      <ContainerPic1>
      <StyledImage src="/elektrik.jpg"
      alt="Elektrik Bild"
      width={350}
      height={350}
      /></ContainerPic1>
         <ContainerPic2>
      <StyledImage src="/brauerei.jpg"
      alt="Brauerei Bild"
      width={350}
      height={350}
      /></ContainerPic2>
         <ContainerPic3>
      <StyledImage src="/Van.jpg"
      alt="Van Bild"
      width={350}
      height={350}
      /></ContainerPic3>
         <ContainerPic4>
      <StyledImage src="/coding.jpg"
      alt="Coding Bild"
      width={350}
      height={350}
      /></ContainerPic4></PicContainer>
      <Timeline><StyledImage src="/Drawing.png"
      alt="Timeline Bild"
      width={1450}
      height={350}/></Timeline>
<ButtonContainer>
  <StyledButton href={"/"}> Back </StyledButton>
</ButtonContainer>
    </>
  );
}
