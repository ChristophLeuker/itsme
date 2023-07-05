import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  width: 80%;
  height: 400px;
  background-image: linear-gradient(
    to bottom,
    transparent 50%,
    var(--button-color) 50%
  );
  background-size: 100% 4px;
  background-repeat: repeat-y;
  display: flex;
  position: relative;
  flex-direction: column;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: black solid 2px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
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
  z-index: 2;
`;

export default function EditForm({
  onSubmit,
  formName,
  name,
  nickname,
  email,
  hometown,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);

    console.log(onSubmit(data));
  }
  {
    return (
      <>
        <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
          <Label htmlFor="name">Name:</Label>
          <Input id="nameNewPlayer" name="name" type="text" value={name} />

          <Label htmlFor="email">E-Mail:</Label>
          <Input
            id="passwordNewPlayer"
            name="email"
            type="email"
            value={email}
          />
          <Label htmlFor="hometown">Hometown:</Label>
          <Input
            id="emailNewPlayer"
            name="hometown"
            type="text"
            value={hometown}
          />
          <Label htmlFor="nickname">Nickname:</Label>
          <Input
            id="emailNewPlayer"
            name="nickname"
            type="text"
            value={nickname}
          />

          <ButtonContainer>
            <StyledButton type="submit">Save</StyledButton>
            <StyledButton type="submit">Abort</StyledButton>
          </ButtonContainer>
        </FormContainer>
      </>
    );
  }
}
