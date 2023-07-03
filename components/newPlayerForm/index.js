import styled from "styled-components";
import { StyledCreatebutton } from "../createForm";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
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
  justify-content: center;
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
      </>
    );
  }
}
