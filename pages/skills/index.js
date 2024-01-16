
import styled from "styled-components";
import { ButtonContainer, StyledButton} from "../cv";
import { HeaderWrapper, HeaderText } from "..";

export default function skills() {
  return (<>
   
   <HeaderWrapper>
      <HeaderText>This is me - Christoph Leuker</HeaderText>
      </HeaderWrapper>
<ButtonContainer>
<StyledButton href={"/"}> Back </StyledButton>
</ButtonContainer>
    </>
  );
}
