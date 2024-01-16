import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.div`
  background-color: darkorange;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Container = styled.div`
display: flex;
padding top: 200px;
`

export default function cv() {
  return (
    <>
     
      <Container/>
      <HeaderWrapper/>
    </>
  );
}
