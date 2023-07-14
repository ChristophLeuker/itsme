import { useEffect, useState } from "react";
import { useRouter } from "next/router.js";
import styled from "styled-components";
import { Headline } from "../Game501/game";

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
        <p>Go Away !</p>
      ) : (
        <>
          <Headline>Profile page</Headline>
          <p>Hello {player?.name}</p>
        </>
      )}
    </>
  );
}
