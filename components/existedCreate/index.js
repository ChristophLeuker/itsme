import styled from "styled-components";
import { StyledCreatebutton } from "../createForm";

const ExistedContainer = styled.div`
  display: flex;

  flex-direction: column;
  position: relative;
  background-color: darkgoldenrod;
  border: solid black 2px;
  height: 100px;
  width: 40%;
  gap: 10px;
  border-radius: 20px;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  top: -300px;
`;

const Button = styled(StyledCreatebutton)`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

const Text = styled.p`
  text-align: center;
  position: absolute;
  font-size: 1.2rem;
  top: -10px;
`;

export default function AlreadyExistedUser({ existed, handleOnClick }) {
  return (
    <ExistedContainer>
      <Text>{existed} already existed</Text>
      <Button type="button" onClick={handleOnClick}>
        Ok
      </Button>
    </ExistedContainer>
  );
}
