import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
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

function isValidScore(score) {
  return score >= 0 && score <= 180;
}

export default function Game501Layout2() {
  const [resultPlayerOne, setResultPlayerOne] = useState(501);
  const [singleResultPlayerOne, setSingleResultPlayerOne] = useState([]);
  const [resultPlayerTwo, setResultPlayerTwo] = useState(501);
  const [singleResultPlayerTwo, setSingleResultPlayerTwo] = useState([]);

  if (resultPlayerOne === 0) {
    alert("Player One Wins");
  }
  if (resultPlayerTwo === 0) {
    alert("Player Two Wins");
  }

  const handleScoreChange = (
    player,
    index,
    e,
    setResultPlayer,
    setSingleResultPlayer
  ) => {
    const { value, key } = e.target;
    if (key === "Enter") {
      const score = parseInt(value, 10);
      if (isValidScore(score)) {
        const opponentResult =
          player === "playerOne" ? resultPlayerTwo : resultPlayerOne;
        if (score > opponentResult) {
          alert(
            "The score you got is higher than your left score, please insert a correct number"
          );
          return;
        }
        setResultPlayer((prevResultPlayer) => prevResultPlayer - score);
        setSingleResultPlayer((prevSingleResultPlayer) => [
          ...prevSingleResultPlayer.slice(0, index),
          prevSingleResultPlayer[index] - score,
          ...prevSingleResultPlayer.slice(index + 1),
        ]);
      } else {
        alert("Please insert a number between 0 and 180");
      }
    }
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeadPlayer>Player One</TableHeadPlayer>
            <TableHead></TableHead>
            <TableHeadPlayer>Player Two</TableHeadPlayer>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>{resultPlayerOne}</TableCell>
            <TableCell></TableCell>
            <TableCell>{resultPlayerTwo}</TableCell>
          </tr>
          <tr>
            <TableCell>
              {singleResultPlayerOne.map((score, index) => (
                <InputNumber
                  key={index}
                  type="number"
                  value={score}
                  onKeyDown={(e) =>
                    handleScoreChange(
                      "playerOne",
                      index,
                      e,
                      setResultPlayerOne,
                      setSingleResultPlayerOne
                    )
                  }
                />
              ))}
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              {singleResultPlayerTwo.map((score, index) => (
                <InputNumber
                  key={index}
                  type="number"
                  value={score}
                  onKeyDown={(e) =>
                    handleScoreChange(
                      "playerTwo",
                      index,
                      e,
                      setResultPlayerTwo,
                      setSingleResultPlayerTwo
                    )
                  }
                />
              ))}
            </TableCell>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
