import useSWR from "swr";
import { Headline, StyledBackbutton } from "../Game501/game";
import Link from "next/link";
import styled from "styled-components";
import ProfileCard from "../../components/profileCard";
import { useRouter } from "next/router";

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -50px;
`;

export default function PlayerList() {
  const router = useRouter();
  const { data = [], isLoading } = useSWR("/api/players");

  if (isLoading) {
    return <h2>...isLoading</h2>;
  }

  async function handleDelete(id) {
    const response = await fetch(`/api/players/${id}`, { method: "DELETE" });
    if (response.ok) {
      await response.json();
      window.location.reload();
      router.push("/playerlist");
    } else {
      console.log(response.status);
    }
  }

  return (
    <>
      <Headline>all players profiles</Headline>

      <StyledUl>
        {data.map((player) => {
          return (
            <ProfileCard
              key={player._id}
              name={player.name}
              email={player.email}
              onDelete={() => handleDelete(player._id)}
            />
          );
        })}
      </StyledUl>

      <Link href={"/"}>
        <StyledBackbutton> Back to Main </StyledBackbutton>
      </Link>
    </>
  );
}
