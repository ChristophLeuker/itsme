import Game501Layout from "@/components/game501";
import App from "../_app.js";

import styled from "styled-components";

export const Headline = styled.h1`
  text-align: center;
  margin-top: 3rem;
`;

export default function Game501({ playerOneName, playerTwoName }) {
  return (
    <>
      <Headline>501. D.O.</Headline>
      <Game501Layout
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
      />
    </>
  );
}
