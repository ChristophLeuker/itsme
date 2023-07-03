import useSWR from "swr";
import { Headline, StyledBackbutton } from "../Game501/game";
import Link from "next/link";
import styled from "styled-components";
import ProfileCard from "../../components/profileCard";

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -50px;
`;

export default function PlayerList() {
  const { data = [] } = useSWR("/api/players");

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
