/* import Layout from "@/components/layout"; */
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import styled from "styled-components";
import Image from "next/image";

import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const BackgroundContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  `;

  const BackgroundImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  const [playerOneName, setPlayerOneName] = useLocalStorageState(
    "playerOneName",
    { defaultValue: "Player One" }
  );
  const [playerTwoName, setPlayerTwoName] = useLocalStorageState(
    "playerTwoName",
    { defaultValue: "Player Two" }
  );

  function addPlayersName(data) {
    setPlayerOneName(data.namePlayerOne);
    setPlayerTwoName(data.namePlayerTwo);
  }

  return (
    <>
      <BackgroundContainer>
        <BackgroundImage
          src="/dartscheibe2.jpeg"
          width={200}
          height={200}
          alt="dartscheibe background"
        />
      </BackgroundContainer>
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <GlobalStyle />
        <Component
          {...pageProps}
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          addPlayersName={addPlayersName}
        />
      </SWRConfig>
    </>
  );
}
