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

export default function Game501Layout() {
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
            <TableHead>ToGo</TableHead>
            <TableHead>Scored</TableHead>
            <TableHead>ToGo</TableHead>
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
            <TableCell>100</TableCell>
            <TableCell>401</TableCell>
            <TableCell>90</TableCell>
            <TableCell>411</TableCell>
          </tr>
          <tr>
            <TableCell>60</TableCell>
            <TableCell>341</TableCell>
            <TableCell>45</TableCell>
            <TableCell>366</TableCell>
          </tr>
          <tr>
            <TableCell>125</TableCell>
            <TableCell>216</TableCell>
            <TableCell>26</TableCell>
            <TableCell>340</TableCell>
          </tr>
          <tr>
            <TableCell>116</TableCell>
            <TableCell>100</TableCell>
            <TableCell>140</TableCell>
            <TableCell>200</TableCell>
          </tr>
          <tr>
            <TableCell>100</TableCell>
            <TableCell>0</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
