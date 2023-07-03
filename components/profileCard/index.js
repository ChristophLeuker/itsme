import styled from "styled-components";

const Listitem = styled.li`
  display: flex;
  background-color: var(--button-color);
  border: 1px solid black;
  border-radius: 20px;
  flex-direction: column;
  width: 90%;
  height: 4rem;
  margin-top: 1rem;
  padding: 0.7rem;
`;
const StyledText = styled.p`
  margin: 1px;
`;

export default function ProfileCard({ name, email }) {
  return (
    <>
      <Listitem>
        <StyledText>NAME: {name}</StyledText>
        <StyledText>EMAIL: {email}</StyledText>
      </Listitem>
    </>
  );
}
