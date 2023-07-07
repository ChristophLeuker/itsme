import styled from "styled-components";
import { useRouter } from "next/router";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-top: 20px;
`;
const StyleContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    var(--background-color) 50%,
    var(--button-color) 50%
  );
  background-size: 100% 4px;
  background-repeat: repeat-y;
  margin: 15px;
  border-radius: 20px;
  border: black solid 1px;
  height: 250px;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  width: 150px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 325px;
  flex-direction: column;
`;

export const StyledCreatebutton = styled.button`
  background: var(--button-color);
  background: linear-gradient(var(--button-color), var(--button-color-second));
  border-radius: 11px;
  width: 150px;
  height: 30px;
  color: var(--text-button-color);
  display: inline-block;
  cursor: pointer;
  text-align: center;

  bottom: 10px;
  right: 10px;
  margin-top: 20px;
  grid-column: 1 / span 2;
  justify-self: center;
`;

export default function Form({ onSubmit, formName }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }
  {
    return (
      <>
        <StyleContainer>
          <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
            <Label htmlFor="name">Player 1 name:</Label>
            <Input id="namePlayerOne" name="namePlayerOne" type="text" />

            <Label htmlFor="image-url">Player 2 name:</Label>
            <Input id="namePlayerTwo" name="namePlayerTwo" type="text" />

            <ButtonContainer>
              <StyledCreatebutton
                type="submit"
                onClick={() => router.push("/Game501/game")}
              >
                Create Game
              </StyledCreatebutton>
            </ButtonContainer>
          </FormContainer>
        </StyleContainer>
      </>
    );
  }
}
