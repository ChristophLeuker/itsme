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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 900px; /* Abstand nach oben anpassen */
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


export default function cv() {
  return (
    <>
     
      <HeaderWrapper/>
<HeaderText/>
<ButtonContainer>
  <StyledButton href={"/"}/>
</ButtonContainer>
    </>
  );
}
