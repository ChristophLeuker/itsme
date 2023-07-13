import { useState, useEffect } from "react";
import useSWR from "swr";
import { Headline, StyledBackbutton } from "../Game501/game";
import Link from "next/link";
import styled from "styled-components";
import ProfileCard from "../../components/profileCard";
import { useRouter } from "next/router";

export default function SecretSite() {
  const [locked, setLocked] = useState(true);
  const [player, setPlayer] = useState(null);

  const router = useRouter();
  const { playerId } = router.query;
  const { data = [], isLoading } = useSWR("/api/players");

  useEffect(() => {
    if (data) {
      setLocked(false);
    } else {
      setLocked(true);
    }
  }, [data]);
  if (isLoading) {
    return <h2>All player profiles are loading ...</h2>;
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
      {locked ? (
        <h3>Hier verboten</h3>
      ) : (
        <StyledUl>
          <h3>eig richtig</h3>

          {data.map((player) => {
            return (
              <ProfileCard
                key={player._id}
                id={player._id}
                name={player.name}
                email={player.email}
                hometown={player.hometown}
                nickname={player.nickname}
                onDelete={() => handleDelete(player._id)}
              />
            );
          })}
        </StyledUl>
      )}

      <Link href={"/"}>
        <StyledBackbutton> Back to Main </StyledBackbutton>
      </Link>
    </>
  );
}

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -50px;
`;
