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
  background-color: none;
`;

export default function Game501Layout() {
  const [resultPlayerOne, setResultPlayerOne] = useState(501);
  const [singleResultPlayerOne, setSingleResultPlayerOne] = useState([]);
  const [resultPlayerTwo, setResultPlayerTwo] = useState(501);

  console.log(singleResultPlayerOne);
  console.log(resultPlayerOne);

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
                    setResultPlayerOne(resultPlayerOne - e.target.value);
                    setSingleResultPlayerOne([
                      resultPlayerOne - e.target.value,
                    ]);
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
                /* onKeyDown={} */
              />
            </TableCell>
            <TableCell>{resultPlayerTwo}</TableCell>
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
                    setResultPlayerOne(resultPlayerOne - e.target.value);
                    setSingleResultPlayerOne([
                      ...singleResultPlayerOne,
                      singleResultPlayerOne[0] - e.target.value,
                    ]);
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
              />
            </TableCell>
            <TableCell>411</TableCell>
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
                    setResultPlayerOne(resultPlayerOne - e.target.value);
                    setSingleResultPlayerOne([
                      ...singleResultPlayerOne,
                      singleResultPlayerOne[1] - e.target.value,
                    ]);
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
              />
            </TableCell>
            <TableCell>411</TableCell>
          </tr>
          <tr>
            <TableCell>
              <label htmlFor="fieldOne-four" />
              <InputNumber
                type="number"
                name="fieldOne-four"
                aria-label="input-field-four-from-player-one"
              />
            </TableCell>
            <TableCell>401</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-four" />
              <InputNumber
                type="number"
                name="fieldtwo-four"
                aria-label="input-field-four-from-player-two"
              />
            </TableCell>
            <TableCell>411</TableCell>
          </tr>
          <tr>
            <TableCell>
              <label htmlFor="fieldOne-five" />
              <InputNumber
                type="number"
                name="fieldOne-five"
                aria-label="input-field-five-from-player-one"
              />
            </TableCell>
            <TableCell>401</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-five" />
              <InputNumber
                type="number"
                name="fieldtwo-five"
                aria-label="input-field-five-from-player-two"
              />
            </TableCell>
            <TableCell>411</TableCell>
          </tr>
          <tr>
            <TableCell>
              <label htmlFor="fieldOne-six" />
              <InputNumber
                type="number"
                name="fieldOne-six"
                aria-label="input-field-six-from-player-one"
              />
            </TableCell>
            <TableCell>401</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-one" />
              <InputNumber
                type="number"
                name="fieldtwo-one"
                aria-label="input-field-six-from-player-two"
              />
            </TableCell>
            <TableCell>411</TableCell>
          </tr>
          <tr>
            <TableCell>
              <label htmlFor="fieldOne-seven" />
              <InputNumber
                type="number"
                name="fieldOne-seven"
                aria-label="input-field-seven-from-player-one"
              />
            </TableCell>
            <TableCell>401</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-seven" />
              <InputNumber
                type="number"
                name="fieldtwo-seven"
                aria-label="input-field-seven-from-player-two"
              />
            </TableCell>
            <TableCell>411</TableCell>
          </tr>
          <tr>
            <TableCell>
              <label htmlFor="fieldOne-eight" />
              <InputNumber
                type="number"
                name="fieldOne-eight"
                aria-label="input-field-eight-from-player-one"
              />
            </TableCell>
            <TableCell>401</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-eight" />
              <InputNumber
                type="number"
                name="fieldtwo-eight"
                aria-label="input-field-eight-from-player-two"
              />
            </TableCell>
            <TableCell>411</TableCell>
          </tr>
          <tr>
            <TableCell>
              <label htmlFor="fieldOne-nine" />
              <InputNumber
                type="number"
                name="fieldOne-nine"
                aria-label="input-field-nine-from-player-one"
              />
            </TableCell>
            <TableCell>401</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-nine" />
              <InputNumber
                type="number"
                name="fieldtwo-nine"
                aria-label="input-field-nine-from-player-two"
              />
            </TableCell>
            <TableCell>411</TableCell>
          </tr>
          <tr>
            <TableCell>
              <label htmlFor="fieldOne-ten" />
              <InputNumber
                type="number"
                name="fieldOne-ten"
                aria-label="input-field-ten-from-player-one"
              />
            </TableCell>
            <TableCell>401</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-ten" />
              <InputNumber
                type="number"
                name="fieldtwo-ten"
                aria-label="input-field-ten-from-player-two"
              />
            </TableCell>
            <TableCell>411</TableCell>
          </tr>
          <tr>
            <TableCell>
              <label htmlFor="fieldOne-eleven" />
              <InputNumber
                type="number"
                name="fieldOne-eleven"
                aria-label="input-field-eleven-from-player-one"
              />
            </TableCell>
            <TableCell>401</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-eleven" />
              <InputNumber
                type="number"
                name="fieldtwo-eleven"
                aria-label="input-field-eleven-from-player-two"
              />
            </TableCell>
            <TableCell>411</TableCell>
          </tr>
          <tr>
            <TableCell>
              <label htmlFor="fieldOne-twelve" />
              <InputNumber
                type="number"
                name="fieldOne-twelve"
                aria-label="input-field-twelve-from-player-one"
              />
            </TableCell>
            <TableCell>401</TableCell>
            <TableCell>
              <label htmlFor="fieldTwo-twelve" />
              <InputNumber
                type="number"
                name="fieldtwo-twelve"
                aria-label="input-field-twelve-from-player-two"
              />
            </TableCell>
            <TableCell>411</TableCell>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
