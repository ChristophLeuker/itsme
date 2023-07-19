import { useEffect, useState } from "react";
import { useRouter } from "next/router.js";
import styled from "styled-components";
import { Headline, StyledBackbutton } from "../Game501/game";
import Link from "next/link";

const Container = styled.div`
  display: flex;

  flex-direction: column;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    var(--background-color) 50%,
    var(--button-color) 50%
  );
  background-size: 100% 4px;
  background-repeat: repeat-y;
  border: solid black 2px;
  height: fit-content;
  width: 80%;
  gap: 10px;
  border-radius: 20px;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  margin-top: -40px;
`;

const WelcomeText = styled.p`
  top: -20px;
  justify-self: center;
  font-size: 2rem;
  text-align: center;
  width: 90%;
`;

const InfoText = styled.p`
  font-size: 1.3rem;
  padding: 0px;
`;

export default function ProfilePage() {
  const router = useRouter();
  const { profileId } = router.query;
  const [player, setPlayer] = useState(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const loadPlayerDetails = async () => {
      try {
        const response = await fetch(`/api/players/${profileId}`);
        if (!response.ok) {
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
    if (profileId) {
      loadPlayerDetails();
    }
  }, [profileId]);
  return (
    <>
      {locked ? (
        <p>🔒 Unauthorized</p>
      ) : (
        <>
          <Headline>Personal profile page</Headline>
          <Container>
            <WelcomeText>Welcome {player?.name} 🎯</WelcomeText>
            <InfoText>Email: {player?.email}</InfoText>
            <InfoText>Hometown: {player?.hometown}</InfoText>
            <InfoText>Nickname: {player?.nickname}</InfoText>
            <InfoText>Statistics:</InfoText>
          </Container>
          <Link href={"/"}>
            <StyledBackbutton>Back to Main</StyledBackbutton>
          </Link>
        </>
      )}
    </>
  );
}
