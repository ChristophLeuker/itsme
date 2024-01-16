import styled from "styled-components";
import { Link } from 'react-router-dom';


const HeaderWrapper = styled.div`
  background-color: darkorange;
  color: white;
  padding: 20px;
  text-align: center;
`;

const HeaderText = styled.h1`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 200px; /* Abstand nach oben anpassen */
`;

const StyledButton = styled(Link)`
  text-decoration: none;
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;


export default function HomePage() {
  return (
    <><HeaderWrapper>
      <HeaderText>This is me - ChristophLeuker</HeaderText>
      </HeaderWrapper>
          
    </>
  );
}
