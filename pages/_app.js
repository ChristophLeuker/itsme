import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");

  function addPlayersName(data) {
    /*  console.log(data);
    console.log(data.namePlayerOne);
    console.log(data.namePlayerTwo); */
    setPlayerOneName(data.namePlayerOne);
    setPlayerTwoName(data.namePlayerTwo);
  }
  console.log(playerTwoName);
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
        addPlayersName={addPlayersName}
      />
    </>
  );
}
