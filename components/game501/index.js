import styled from "styled-components";
import { useEffect, useState } from "react";
import NewGameQuestion from "../newGameQuestion";
import TableUnit from "./table";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  position: relative;
  top: -50px;
`;

const Table = styled.table`
  border-collapse: collapse;
  background-color: var(--button-color);
`;

const TableHeadPlayer = styled.th`
  border: 5px solid black;
  border-radius: 0.8rem;
  padding: 0.5rem;
  text-align: center;
`;
const TableHead = styled.th`
  border: 1px solid black;
  border-radius: 0.8rem;
  padding: 0.5rem;
  text-align: center;
`;

export const TableCell = styled.td`
  border: 1px solid black;
  text-align: center;
  height: 2rem;
`;

export const InputNumber = styled.input`
  width: 3rem;
  background-color: transparent;
  border: none;
`;

const Hint = styled.div`
  display: flex;
  font-size: 10px;
  justify-content: center;
`;

export default function Game501Layout({ playerOneName, playerTwoName }) {
  const [singleResultPlayerOne, setSingleResultPlayerOne] = useState([]);
  const [singleResultPlayerTwo, setSingleResultPlayerTwo] = useState([]);
  const [playerOneWins, setPlayerOneWins] = useState(false);
  const [playerTwoWins, setPlayerTwoWins] = useState(false);
  const [numberDartsP1, setNumberDartsP1] = useState(0);
  const [numberDartsP2, setNumberDartsP2] = useState(0);

  function handleSubmitPlayerOne(event, index) {
    if (event.key === "Enter") {
      const value = parseInt(event.target.value, 10);
      if (value > singleResultPlayerOne[index]) {
        alert(
          "The score you got is higher than your left score, pls insert a correct number"
        );
        return;
      }
      if (value > 0 && value <= 180) {
        setSingleResultPlayerOne([
          ...singleResultPlayerOne.slice(0, index + 1),
          singleResultPlayerOne[index] - value,
          ...singleResultPlayerOne.slice(index + 2),
        ]);
      } else {
        alert("insert a number between 0 and 180");
      }
    }
  }

  function handleSubmitPlayerTwo(event, index) {
    if (event.key === "Enter") {
      const value = parseInt(event.target.value, 10);
      if (value > singleResultPlayerTwo[index]) {
        alert(
          "The score you got is higher than your left score, pls insert a correct number"
        );
        return;
      }
      if (value > 0 && value <= 180) {
        setSingleResultPlayerTwo([
          ...singleResultPlayerTwo.slice(0, index + 1),
          singleResultPlayerTwo[index] - value,
          ...singleResultPlayerTwo.slice(index + 2),
        ]);
      } else {
        alert("insert a number between 0 and 180");
      }
    }
  }

  useEffect(() => {
    if (singleResultPlayerOne.some((item) => item === 0)) {
      setPlayerOneWins(true);
    }
  }, [singleResultPlayerOne]);

  useEffect(() => {
    if (singleResultPlayerTwo.some((item) => item === 0)) {
      setPlayerTwoWins(true);
    }
  }, [singleResultPlayerTwo]);

  if (singleResultPlayerTwo[11] && singleResultPlayerOne[11] > 0) {
    alert("too bad for now, try again!");
  }

  function handleNoGame() {
    setPlayerTwoWins(false);
    setPlayerOneWins(false);
  }

  useEffect(() => {
    setNumberDartsP1(singleResultPlayerOne.length * 3);
  }, [singleResultPlayerOne]);
  useEffect(() => {
    setNumberDartsP2(singleResultPlayerTwo.length * 3);
  }, [singleResultPlayerTwo]);

  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              <TableHeadPlayer colSpan={2}>{playerOneName}</TableHeadPlayer>
              <TableHeadPlayer colSpan={2}>{playerTwoName}</TableHeadPlayer>
            </tr>
            <tr>
              <TableHead>Scored</TableHead>
              <TableHead>To Go</TableHead>
              <TableHead>Scored</TableHead>
              <TableHead>To Go</TableHead>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>/</TableCell>
              <TableCell>501</TableCell>
              <TableCell>/</TableCell>
              <TableCell>501</TableCell>
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-one"}
                ariaLabel={"input-field-one-from-player-one"}
                handleSubmit={(e) => {
                  if (e.key === "Enter") {
                    const value = parseInt(e.target.value, 10);
                    if (value >= 0 && value <= 180) {
                      setSingleResultPlayerOne([
                        501 - value,
                        ...singleResultPlayerOne.slice(0 + 1),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
                result={singleResultPlayerOne[0]}
              />
              <TableUnit
                fieldName={"fieldTwo-one"}
                ariaLabel={"input-field-one-from-player-two"}
                handleSubmit={(e) => {
                  if (e.key === "Enter") {
                    const value = parseInt(e.target.value, 10);
                    if (value >= 0 && value <= 180) {
                      setSingleResultPlayerTwo([
                        501 - value,
                        ...singleResultPlayerTwo.slice(0 + 1),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
                result={singleResultPlayerTwo[0]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-two"}
                ariaLabel={"input-field-two-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 0)}
                result={singleResultPlayerOne[1]}
              />
              <TableUnit
                fieldName={"fieldTwo-two"}
                ariaLabel={"input-field-two-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 0)}
                result={singleResultPlayerTwo[1]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-three"}
                ariaLabel={"input-field-three-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 1)}
                result={singleResultPlayerOne[2]}
              />
              <TableUnit
                fieldName={"fieldTwo-three"}
                ariaLabel={"input-field-three-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 1)}
                result={singleResultPlayerTwo[2]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-four"}
                ariaLabel={"input-field-four-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 2)}
                result={singleResultPlayerOne[3]}
              />
              <TableUnit
                fieldName={"fieldTwo-four"}
                ariaLabel={"input-field-four-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 2)}
                result={singleResultPlayerTwo[3]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-five"}
                ariaLabel={"input-field-five-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 3)}
                result={singleResultPlayerOne[4]}
              />
              <TableUnit
                fieldName={"fieldTwo-five"}
                ariaLabel={"input-field-five-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 3)}
                result={singleResultPlayerTwo[4]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-six"}
                ariaLabel={"input-field-six-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 4)}
                result={singleResultPlayerOne[5]}
              />
              <TableUnit
                fieldName={"fieldTwo-six"}
                ariaLabel={"input-field-six-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 4)}
                result={singleResultPlayerTwo[5]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-seven"}
                ariaLabel={"input-field-seven-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 5)}
                result={singleResultPlayerOne[6]}
              />
              <TableUnit
                fieldName={"fieldTwo-seven"}
                ariaLabel={"input-field-seven-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 5)}
                result={singleResultPlayerTwo[6]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-eight"}
                ariaLabel={"input-field-eight-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 6)}
                result={singleResultPlayerOne[7]}
              />
              <TableUnit
                fieldName={"fieldTwo-eight"}
                ariaLabel={"input-field-eight-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 6)}
                result={singleResultPlayerTwo[7]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-nine"}
                ariaLabel={"input-field-nine-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 7)}
                result={singleResultPlayerOne[8]}
              />
              <TableUnit
                fieldName={"fieldTwo-nine"}
                ariaLabel={"input-field-nine-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 7)}
                result={singleResultPlayerTwo[8]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-ten"}
                ariaLabel={"input-field-ten-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 8)}
                result={singleResultPlayerOne[9]}
              />
              <TableUnit
                fieldName={"fieldTwo-ten"}
                ariaLabel={"input-field-ten-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 8)}
                result={singleResultPlayerTwo[9]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-eleven"}
                ariaLabel={"input-field-eleven-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 9)}
                result={singleResultPlayerOne[10]}
              />
              <TableUnit
                fieldName={"fieldTwo-eleven"}
                ariaLabel={"input-field-eleven-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 9)}
                result={singleResultPlayerTwo[10]}
              />
            </tr>
            <tr>
              <TableUnit
                fieldName={"fieldOne-twelve"}
                ariaLabel={"input-field-twelve-from-player-one"}
                handleSubmit={(event) => handleSubmitPlayerOne(event, 10)}
                result={singleResultPlayerOne[11]}
              />
              <TableUnit
                fieldName={"fieldTwo-twelve"}
                ariaLabel={"input-field-twelve-from-player-two"}
                handleSubmit={(event) => handleSubmitPlayerTwo(event, 10)}
                result={singleResultPlayerTwo[11]}
              />
            </tr>
          </tbody>
        </Table>
      </Container>
      <Hint>use Enter to commit your score</Hint>
      <NewGameQuestion
        playerOneWins={playerOneWins}
        playerTwoWins={playerTwoWins}
        playerTwoName={playerTwoName}
        playerOneName={playerOneName}
        handleNoGame={handleNoGame}
        numberDartsP1={numberDartsP1}
        numberDartsP2={numberDartsP2}
      />
    </>
  );
}
