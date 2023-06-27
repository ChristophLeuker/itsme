import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [playerProfiles, setPlayerProfiles] = useState([]);

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
