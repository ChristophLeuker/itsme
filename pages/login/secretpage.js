import { useState, useEffect } from "react";
import useSWR from "swr";
import { Headline, StyledBackbutton } from "../Game501/game";
import Link from "next/link";
import styled from "styled-components";
import ProfileCard from "../../components/profileCard";
import { useRouter } from "next/router";

export default function SecretSite() {
  const [locked, setLocked] = useState(false);
  const [player, setPlayer] = useState(null);

  const router = useRouter();
  const { playerId } = router.query;
  const { data = [], isLoading } = useSWR("/api/players");
  console.log(data);

  useEffect(() => {
    if (data) {
      setLocked(false);
    }
  }, [data]);
  if (isLoading) {
    return <h2>All player profiles are loading ...</h2>;
  }
  /*   useEffect(() => {
    const loadPlayerList = async () => {
      try {
        const response = await fetch(`/api/players`);
        if (response.ok) {
          if (response.status === 401) {
            setLocked(true);
            return;
          } else {
            throw new Error(`status: ${response.status}`);
          }
        }
        const data = await response.json();
        setPlayer(data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
    {
      loadPlayerList();
    }
  }, []); */

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
