import styled from "styled-components";
import { useRouter } from "next/router";

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
  grid-column: span 2 / auto;
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
        <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
          <Label htmlFor="name">Name:</Label>
          <Input id="nameNewPlayer" name="nameNewPlayer" type="text" />

          <Label htmlFor="image-url">Passwort:</Label>
          <Input
            id="passwordNewPlayer"
            name="passwordNewPlayer"
            type="password"
          />
          <Label htmlFor="image-url">E-Mail</Label>
          <Input id="emailNewPlayer" name="emailNewPlayer" type="email" />

          <ButtonContainer>
            <Button type="submit" onClick={() => router.push("/")}>
              Create New Profile
            </Button>
          </ButtonContainer>
        </FormContainer>
      </>
    );
  }
}
