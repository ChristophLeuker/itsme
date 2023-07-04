import styled from "styled-components";
import Image from "next/image";
import DeleteQuestion from "../deleteQuestion";
import { useState } from "react";

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
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
const StyledText = styled.p`
  margin: 1px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  gap: 5px;
`;

export default function ProfileCard({ name, email, onDelete }) {
  const [deleteOption, setDeleteOption] = useState(false);
  return (
    <>
      <Listitem>
        <StyledText>NAME: {name}</StyledText>
        <StyledText>EMAIL: {email}</StyledText>
        <ImageContainer>
          <Image
            src="/delete-button-svg.svg"
            alt="delete svg"
            width={20}
            height={20}
            onClick={setDeleteOption}
          />
          <Image
            src="/edit-button-svg.svg"
            alt="edit svg"
            width={20}
            height={20}
          />
        </ImageContainer>
      </Listitem>
      {deleteOption ? <DeleteQuestion handleDelete={onDelete} /> : null}
    </>
  );
}
