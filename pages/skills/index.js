
import styled from "styled-components";
import { ButtonContainer, StyledButton, TextContainer, Text} from "../cv";
import { HeaderWrapper, HeaderText } from "..";
import React, { useState } from 'react';

const Container = styled.div`
  text-align: center;
  margin-top: 250px;
`;

const SkillText = styled.p`
  font-size: 90px;
  color: darkorange;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: darkorange;
  color: white;
  border-radius: 10%;
`;
 
export default function Skills() {
  const phrases = ['Teamfähig', 'Ehrgeizig', 'schnelle Auffassung', 'Kommunikativ', 'Lebenserfahrung', 'Zuverlässig', 'offen für neue Technologien', 'Empathisch'];

 const [currentIndex, setCurrentIndex] = useState(0);

  const changePhrase = () => {
    const nextIndex = (currentIndex + 1) % phrases.length;
    setCurrentIndex(nextIndex);
  };

  return (<>
   
   <HeaderWrapper>
      <HeaderText>This is me - Christoph Leuker</HeaderText>
      </HeaderWrapper>
<TextContainer>
  <Text>Was bringe ich mit</Text>
</TextContainer>
      <Container>
      <SkillText>{phrases[currentIndex]}</SkillText>
      <Button onClick={changePhrase}>Next Skill</Button>
    </Container>

<ButtonContainer>
<StyledButton href={"/"}> Back </StyledButton>
</ButtonContainer>
    </>
  );
}
