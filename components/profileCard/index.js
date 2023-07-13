import styled from "styled-components";
import Image from "next/image";
import DeleteQuestion from "../deleteQuestion";
import { useState } from "react";
import EditForm from "../editForm";
import Link from "next/link";

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

export default function ProfileCard({
  name,
  id,
  email,
  onDelete,
  hometown,
  nickname,
  isLocked,
}) {
  const [deleteOption, setDeleteOption] = useState(false);
  const [editOption, setEditOption] = useState(false);

  async function handleEdit(data) {
    const response = await fetch(`/api/players/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      await response.json();
      window.location.reload();
    }
  }

  return (
    <>
      <Listitem>
        <Link href={`profilepage/${id}`}>
          <StyledText>NAME: {name}</StyledText>
          <StyledText>EMAIL: {email}</StyledText>
        </Link>
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
            onClick={setEditOption}
          />
        </ImageContainer>
      </Listitem>{" "}
      {deleteOption ? <DeleteQuestion handleDelete={onDelete} /> : null}
      {editOption ? (
        <EditForm
          onSubmit={handleEdit}
          formName={"editPlayerProfiles"}
          name={name}
          email={email}
          hometown={hometown}
          nickname={nickname}
        />
      ) : null}
    </>
  );
}
