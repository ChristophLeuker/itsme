import { Headline, StyledBackbutton } from "../Game501/game";
import CreateNewPlayer from "../../components/newPlayer";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CreateNewPlayerSite() {
  const router = useRouter();

  async function addNewPlayerProfile(playerProfileData) {
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
  return (
    <>
      <Headline>Create new player profile</Headline>
      <CreateNewPlayer onSubmit={addNewPlayerProfile} />
      <Link href={"/"}>
        <StyledBackbutton> Back to Main </StyledBackbutton>
      </Link>
    </>
  );
}
