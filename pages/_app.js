import GlobalStyle from "../styles";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");

  const [playerProfiles, setPlayerProfiles] = useLocalStorageState(
    "playerProfiles",
    {
      defaultValue: [{}],
    }
  );

  function addPlayersName(data) {
    setPlayerOneName(data.namePlayerOne);
    setPlayerTwoName(data.namePlayerTwo);
  }

  function addNewPlayerProfile(data) {
    setPlayerProfiles([...playerProfiles, data]);
  }
  console.log(playerProfiles);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
        addPlayersName={addPlayersName}
        addNewPlayerProfile={addNewPlayerProfile}
      />
    </>
  );
}
