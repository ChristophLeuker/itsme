import Link from "next/link";
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
`;

const Label = styled.label`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 20px;
  grid-column: 1 / span 2;
  justify-self: center;
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
          <Label htmlFor="name">Player 1 name:</Label>
          <Input id="namePlayerOne" name="namePlayerOne" type="text" />

          <Label htmlFor="image-url">Player 2 name:</Label>
          <Input id="namePlayerTwo" name="namePlayerTwo" type="text" />

          <ButtonContainer>
            <Link href="/Game501/game">
              <Button type="submit">Create Game</Button>
            </Link>
          </ButtonContainer>
        </FormContainer>
      </>
    );
  }
}
