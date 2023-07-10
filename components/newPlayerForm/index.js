import styled from "styled-components";
import { StyledCreatebutton } from "../createForm";

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
  align-self: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 340px;
`;

export default function Form({ onSubmit, formName }) {
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
            <Label htmlFor="name">Name:</Label>
            <Input id="nameNewPlayer" name="name" type="text" />

            <Label htmlFor="password">Passwort:</Label>
            <Input id="passwordNewPlayer" name="password" type="password" />
            <Label htmlFor="email">E-Mail</Label>
            <Input id="emailNewPlayer" name="email" type="email" />

            <ButtonContainer>
              <StyledCreatebutton type="submit">
                Create New Profile
              </StyledCreatebutton>
            </ButtonContainer>
          </FormContainer>
        </StyleContainer>
      </>
    );
  }
}
