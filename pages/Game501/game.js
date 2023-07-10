import Game501Layout from "../../components/game501";
import styled from "styled-components";
import Link from "next/link";

export const Headline = styled.h1`
  text-align: center;
  margin-top: 3rem;
  background: darkgoldenrod;
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  justify-content: center;
  top: -50px;
  align-items: center;
  border-bottom: 2px solid;
`;

export const StyledBackbutton = styled.button`
  background: var(--button-color);
  background: linear-gradient(var(--button-color), var(--button-color-second));
  border-radius: 11px;
  width: 150px;
  height: 30px;
  color: var(--text-button-color);
  display: inline-block;
  cursor: pointer;
  text-align: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

export default function Game501({ playerOneName, playerTwoName }) {
  return (
    <>
      <Headline>501. D.O. 🎯</Headline>
      <Game501Layout
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
      />
      <Link href={"/"}>
        <StyledBackbutton> Back to Main </StyledBackbutton>
      </Link>
    </>
  );
}
