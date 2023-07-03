import styled from "styled-components";
import { useEffect, useState } from "react";
import NewGameQuestion from "../newGameQuestion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  position: relative;
  top: -50px;
`;

const Table = styled.table`
  border-collapse: collapse;
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

const TableCell = styled.td`
  border: 1px solid black;
  text-align: center;
  height: 2rem;
`;

const InputNumber = styled.input`
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
              <TableCell>
                <label htmlFor="fieldOne-one" />
                <InputNumber
                  type="number"
                  name="fieldOne-one"
                  aria-label="input-field-one-from-player-one"
                  onKeyDown={(e) => {
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
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[0]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-one" />
                <InputNumber
                  type="number"
                  name="fieldtwo-one"
                  aria-label="input-field-one-from-player-two"
                  onKeyDown={(e) => {
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
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[0]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-two" />
                <InputNumber
                  type="number"
                  name="fieldOne-two"
                  aria-label="input-field-two-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 0)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[1]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-two" />
                <InputNumber
                  type="number"
                  name="fieldtwo-two"
                  aria-label="input-field-two-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 0)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[1]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-three" />
                <InputNumber
                  type="number"
                  name="fieldOne-three"
                  aria-label="input-field-three-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 1)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[2]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-three" />
                <InputNumber
                  type="number"
                  name="fieldtwo-three"
                  aria-label="input-field-three-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 1)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[2]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-four" />
                <InputNumber
                  type="number"
                  name="fieldOne-four"
                  aria-label="input-field-four-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 2)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[3]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-four" />
                <InputNumber
                  type="number"
                  name="fieldtwo-four"
                  aria-label="input-field-four-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 2)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[3]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-five" />
                <InputNumber
                  type="number"
                  name="fieldOne-five"
                  aria-label="input-field-five-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 3)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[4]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-five" />
                <InputNumber
                  type="number"
                  name="fieldtwo-five"
                  aria-label="input-field-five-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 3)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[4]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-six" />
                <InputNumber
                  type="number"
                  name="fieldOne-six"
                  aria-label="input-field-six-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 4)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[5]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-one" />
                <InputNumber
                  type="number"
                  name="fieldtwo-one"
                  aria-label="input-field-six-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 4)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[5]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-seven" />
                <InputNumber
                  type="number"
                  name="fieldOne-seven"
                  aria-label="input-field-seven-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 5)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[6]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-seven" />
                <InputNumber
                  type="number"
                  name="fieldtwo-seven"
                  aria-label="input-field-seven-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 5)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[6]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-eight" />
                <InputNumber
                  type="number"
                  name="fieldOne-eight"
                  aria-label="input-field-eight-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 6)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[7]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-eight" />
                <InputNumber
                  type="number"
                  name="fieldtwo-eight"
                  aria-label="input-field-eight-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 6)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[7]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-nine" />
                <InputNumber
                  type="number"
                  name="fieldOne-nine"
                  aria-label="input-field-nine-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 7)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[8]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-nine" />
                <InputNumber
                  type="number"
                  name="fieldtwo-nine"
                  aria-label="input-field-nine-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 7)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[8]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-ten" />
                <InputNumber
                  type="number"
                  name="fieldOne-ten"
                  aria-label="input-field-ten-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 8)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[9]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-ten" />
                <InputNumber
                  type="number"
                  name="fieldtwo-ten"
                  aria-label="input-field-ten-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 8)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[9]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-eleven" />
                <InputNumber
                  type="number"
                  name="fieldOne-eleven"
                  aria-label="input-field-eleven-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 9)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[10]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-eleven" />
                <InputNumber
                  type="number"
                  name="fieldtwo-eleven"
                  aria-label="input-field-eleven-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 9)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[10]}</TableCell>
            </tr>
            <tr>
              <TableCell>
                <label htmlFor="fieldOne-twelve" />
                <InputNumber
                  type="number"
                  name="fieldOne-twelve"
                  aria-label="input-field-twelve-from-player-one"
                  onKeyDown={(event) => handleSubmitPlayerOne(event, 10)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerOne[11]}</TableCell>
              <TableCell>
                <label htmlFor="fieldTwo-twelve" />
                <InputNumber
                  type="number"
                  name="fieldtwo-twelve"
                  aria-label="input-field-twelve-from-player-two"
                  onKeyDown={(event) => handleSubmitPlayerTwo(event, 10)}
                />
              </TableCell>
              <TableCell>{singleResultPlayerTwo[11]}</TableCell>
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
