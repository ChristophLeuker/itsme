import styled from "styled-components";

const WinnerContainer = styled.div`
  position: absolute;
  background-color: grey;
  width: 200px;
  height: 200px;
  border-radius: 50px;
  top: 450px;
  left: 100px;
  display: flex;
  justify-content: center;
`;

const WinnerText = styled.p`
  text-align: center;
  background-color: pink;
  position: absolute;
  top: 30px;
`;

export default function NewGameQuestion({ playerOneWins, playerTwoWins }) {
  if (playerOneWins) {
    return (
      <>
        <WinnerContainer>
          <WinnerText>Player One Wins!</WinnerText>
        </WinnerContainer>
      </>
    );
  } else if (playerTwoWins) {
    return (
      <>
        <WinnerContainer>
          <WinnerText>Player Two Wins!</WinnerText>
        </WinnerContainer>
      </>
    );
  }
}
