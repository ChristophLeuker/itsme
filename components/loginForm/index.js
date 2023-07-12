import Link from "next/link";
import styled from "styled-components";

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
  height: 290px;
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
  top: 325px;
  flex-direction: column;
`;

const StyledButton = styled.button`
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

export default function LogInForm({ formName, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }
  return (
    <>
      <StyleContainer>
        <FormContainer aria-labelledby={formName} onSubmit={onSubmit}>
          <Label htmlFor="email">Email:</Label>
          <Input name="email" type="email" />
          <Label htmlFor="password">Password:</Label>
          <Input name="password" type="password" />

          <ButtonContainer>
            <StyledButton type="submit">Log In</StyledButton>
            <Link href="/createplayer">
              <StyledButton type="button">Create new Player</StyledButton>
            </Link>
          </ButtonContainer>
        </FormContainer>
      </StyleContainer>
    </>
  );
}
