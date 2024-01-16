import { Headline, StyledBackbutton } from "../cv/game";
import CreateNewPlayer from "../../components/newPlayer";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import AlreadyExistedUser from "../../components/existedCreate";
import { useState } from "react";

export default function CreateNewPlayerSite() {
  const router = useRouter();
  const { data } = useSWR("/api/createdEmail");
  const [existedEmail, setExistedEmail] = useState(false);
  const [existedUsername, setExistedUsername] = useState(false);
  const [disabled, setDisabled] = useState(false);
  async function addNewPlayerProfile(playerProfileData) {
    setDisabled(true);
    const existedEmail = data?.find(
      (item) => item.email === playerProfileData.email
    );
    const existedName = data?.find(
      (item) => item.name === playerProfileData.name
    );

    if (existedEmail) {
      return setExistedEmail(true), console.log("Email already existed");
    }
    if (existedName) {
      return setExistedUsername(true), console.log("username already existed");
    }

    const response = await fetch("/api/players/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playerProfileData),
    });

    if (response.ok) {
      await response.json();
      router.push("/");
    }
  }

  function handleOnClick() {
    setExistedEmail(false), setExistedUsername(false), setDisabled(false);
  }
  return (
    <>
      <Headline>Create new player profile</Headline>
      <CreateNewPlayer onSubmit={addNewPlayerProfile} disabled={disabled} />
      {existedEmail && (
        <AlreadyExistedUser existed={"E-Mail"} handleOnClick={handleOnClick} />
      )}
      {existedUsername && (
        <AlreadyExistedUser
          existed={"Username"}
          handleOnClick={handleOnClick}
        />
      )}
      <Link href={"/"}>
        <StyledBackbutton> Back to Main </StyledBackbutton>
      </Link>
    </>
  );
}
