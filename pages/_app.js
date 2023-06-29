import GlobalStyle from "../styles";

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
