import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 100px;
  background-color: var(--button-color);
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 20px;
  border: black solid 2px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 40px;
  align-self: center;
`;

const StyledButton = styled.button`
  background: var(--button-color);
  background: linear-gradient(var(--button-color), var(--button-color-second));
  border-radius: 11px;
  width: 50px;
  height: 30px;
  color: var(--text-button-color);
  display: inline-block;
  cursor: pointer;
  text-align: center;
  margin: 10px;
  bottom: 10px;
  right: 10px;
  z-index: 2;
`;

const StyledQuestion = styled.p`
  text-align: center;
  color: red;
  font-size: 1.2rem;
`;

export default function DeleteQuestion({ handleDelete }) {
  console.log("bin hier");
  return (
    <>
      <Container>
        <StyledQuestion>Do you want to delete?</StyledQuestion>
        <ButtonContainer>
          <StyledButton type="button" onClick={handleDelete}>
            Yes
          </StyledButton>
          <StyledButton type="button" onClick={() => window.location.reload()}>
            No
          </StyledButton>
        </ButtonContainer>
      </Container>
    </>
  );
}
