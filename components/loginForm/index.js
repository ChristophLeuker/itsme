import styled from "styled-components";

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
  align-self: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 325px;
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
      <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input name="name" type="text" />
        <Label htmlFor="password">Password:</Label>
        <Input name="password" type="password" />

        <ButtonContainer>
          <StyledButton type="submit">Log In</StyledButton>
        </ButtonContainer>
      </FormContainer>
    </>
  );
}
