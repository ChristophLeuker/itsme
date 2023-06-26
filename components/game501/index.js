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

export default function Game501Layout() {
  const [resultPlayerOne, setResultPlayerOne] = useState(501);
  const [singleResultPlayerOne, setSingleResultPlayerOne] = useState([]);
  const [resultPlayerTwo, setResultPlayerTwo] = useState(501);
  const [singleResultPlayerTwo, setSingleResultPlayerTwo] = useState([]);
  console.log(singleResultPlayerOne);
  if (resultPlayerOne === 0) {
    alert("Player One Wins");
  }
  if (resultPlayerTwo === 0) {
    alert("Player Two Wins");
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeadPlayer colSpan={2}>Player 1</TableHeadPlayer>
            <TableHeadPlayer colSpan={2}>Player 2</TableHeadPlayer>
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
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        501 - e.target.value,
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
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        501 - e.target.value,
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 0 + 1),
                        singleResultPlayerOne[0] - e.target.value,
                        ...singleResultPlayerOne.slice(0 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[1]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-two" />
              <InputNumber
                type="number"
                name="fieldtwo-two"
                aria-label="input-field-two-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 0 + 1),
                        singleResultPlayerTwo[0] - e.target.value,
                        ...singleResultPlayerTwo.slice(0 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerOne[1]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 1 + 1),
                        singleResultPlayerOne[1] - e.target.value,
                        ...singleResultPlayerOne.slice(1 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[2]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-three" />
              <InputNumber
                type="number"
                name="fieldtwo-three"
                aria-label="input-field-three-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerTwo[1]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 1 + 1),
                        singleResultPlayerTwo[1] - e.target.value,
                        ...singleResultPlayerTwo.slice(1 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerOne[2]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 2 + 1),
                        singleResultPlayerOne[2] - e.target.value,
                        ...singleResultPlayerOne.slice(2 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[3]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-four" />
              <InputNumber
                type="number"
                name="fieldtwo-four"
                aria-label="input-field-four-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerTwo[2]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 2 + 1),
                        singleResultPlayerTwo[2] - e.target.value,
                        ...singleResultPlayerTwo.slice(2 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerOne[3]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 3 + 1),
                        singleResultPlayerOne[3] - e.target.value,
                        ...singleResultPlayerOne.slice(3 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[4]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-five" />
              <InputNumber
                type="number"
                name="fieldtwo-five"
                aria-label="input-field-five-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerTwo[3]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 3 + 1),
                        singleResultPlayerTwo[3] - e.target.value,
                        ...singleResultPlayerTwo.slice(3 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerOne[4]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 4 + 1),
                        singleResultPlayerOne[4] - e.target.value,
                        ...singleResultPlayerOne.slice(4 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[5]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-one" />
              <InputNumber
                type="number"
                name="fieldtwo-one"
                aria-label="input-field-six-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerTwo[4]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 4 + 1),
                        singleResultPlayerTwo[4] - e.target.value,
                        ...singleResultPlayerTwo.slice(4 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerOne[5]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 5 + 1),
                        singleResultPlayerOne[5] - e.target.value,
                        ...singleResultPlayerOne.slice(5 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[6]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-seven" />
              <InputNumber
                type="number"
                name="fieldtwo-seven"
                aria-label="input-field-seven-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerTwo[5]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 5 + 1),
                        singleResultPlayerTwo[5] - e.target.value,
                        ...singleResultPlayerTwo.slice(5 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value >= singleResultPlayerOne[6]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value > 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 6 + 1),
                        singleResultPlayerOne[6] - e.target.value,
                        ...singleResultPlayerOne.slice(6 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[7]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-eight" />
              <InputNumber
                type="number"
                name="fieldtwo-eight"
                aria-label="input-field-eight-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerTwo[6]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 6 + 1),
                        singleResultPlayerTwo[6] - e.target.value,
                        ...singleResultPlayerTwo.slice(6 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerOne[7]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 7 + 1),
                        singleResultPlayerOne[7] - e.target.value,
                        ...singleResultPlayerOne.slice(7 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[8]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-nine" />
              <InputNumber
                type="number"
                name="fieldtwo-nine"
                aria-label="input-field-nine-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerTwo[7]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 7 + 1),
                        singleResultPlayerTwo[7] - e.target.value,
                        ...singleResultPlayerTwo.slice(7 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerOne[8]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 8 + 1),
                        singleResultPlayerOne[8] - e.target.value,
                        ...singleResultPlayerOne.slice(8 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[9]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-ten" />
              <InputNumber
                type="number"
                name="fieldtwo-ten"
                aria-label="input-field-ten-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerTwo[8]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 8 + 1),
                        singleResultPlayerTwo[8] - e.target.value,
                        ...singleResultPlayerTwo.slice(8 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerOne[9]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 9 + 1),
                        singleResultPlayerOne[9] - e.target.value,
                        ...singleResultPlayerOne.slice(9 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[10]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-eleven" />
              <InputNumber
                type="number"
                name="fieldtwo-eleven"
                aria-label="input-field-eleven-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerTwo[9]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 9 + 1),
                        singleResultPlayerTwo[9] - e.target.value,
                        ...singleResultPlayerTwo.slice(9 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerOne[10]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerOne(resultPlayerOne - e.target.value);
                      setSingleResultPlayerOne([
                        ...singleResultPlayerOne.slice(0, 10 + 1),
                        singleResultPlayerOne[10] - e.target.value,
                        ...singleResultPlayerOne.slice(10 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerOne[11]}</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-twelve" />
              <InputNumber
                type="number"
                name="fieldtwo-twelve"
                aria-label="input-field-twelve-from-player-two"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value > singleResultPlayerTwo[10]) {
                      alert(
                        "The score you got is higher than your left score, pls insert a correct number"
                      );
                      return;
                    }
                    if (e.target.value >= 0 && e.target.value <= 180) {
                      setResultPlayerTwo(resultPlayerTwo - e.target.value);
                      setSingleResultPlayerTwo([
                        ...singleResultPlayerTwo.slice(0, 10 + 1),
                        singleResultPlayerTwo[10] - e.target.value,
                        ...singleResultPlayerTwo.slice(10 + 2),
                      ]);
                    } else {
                      alert("insert a number between 0 and 180");
                    }
                  }
                }}
              />
            </TableCell>
            <TableCell>{singleResultPlayerTwo[11]}</TableCell>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
