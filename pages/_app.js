import Layout from "@/components/layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
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
      <Layout>
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
      </Layout>
    </>
  );
}
