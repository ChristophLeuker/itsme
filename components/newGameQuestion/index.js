import styled from "styled-components";
import RocketAnimation from "../rocketanimation";

const WinnerContainer = styled.div`
  position: absolute;
  background-color: grey;
  width: 200px;
  height: 200px;
  border-radius: 50px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  justify-content: center;
  border: 3px solid white;
`;

const WinnerText = styled.p`
  text-align: center;
  margin: 5px;
  position: absolute;
  top: 20px;
  color: #ffffff;
  font-size: 1.5rem;
`;

const QuestionText = styled.p`
  text-align: center;
  margin: 5px;
  position: absolute;
  top: 80px;
  color: #ffffff;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 120px;
`;

const Button = styled.button`
  margin: 10px;
  height: 60px;
  border-radius: 100px;
  width: 60px;
`;

export default function NewGameQuestion({
  playerOneWins,
  playerTwoWins,
  playerOneName,
  playerTwoName,
  handleNoGame,
  numberDartsP1,
  numberDartsP2,
}) {
  if (playerOneWins) {
    return (
      <>
        <RocketAnimation />
        <WinnerContainer>
          <WinnerText>
            {playerOneName} Wins in {numberDartsP1} Darts!
          </WinnerText>
          <QuestionText> Want to play again?</QuestionText>
          <ButtonContainer>
            <Button
              type="button"
              alt="play again button"
              onClick={() => window.location.reload()}
            >
              Yes
            </Button>
            <Button
              type="button"
              alt="dont play again button"
              onClick={handleNoGame}
            >
              No
            </Button>
          </ButtonContainer>
        </WinnerContainer>
      </>
    );
  } else if (playerTwoWins) {
    return (
      <>
        <RocketAnimation />
        <WinnerContainer>
          <WinnerText>
            {playerTwoName} Wins in {numberDartsP2} Darts!
          </WinnerText>
          <QuestionText> Want to play again?</QuestionText>
          <ButtonContainer>
            <Button type="button" onClick={() => window.location.reload()}>
              Yes
            </Button>

            <Button
              type="button"
              alt="dont play again button"
              onClick={handleNoGame}
            >
              No
            </Button>
          </ButtonContainer>
        </WinnerContainer>
      </>
    );
  }
}
