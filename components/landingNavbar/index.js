import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 200px;
  left: 10px;
  width: 150px;
  height: 300px;
  background-color: #f2f2f2;
  padding: 1rem;
  transition: left 0.3s ease-in-out;
  border: black solid 1px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;
const NavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavbarLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin-bottom: 0.5rem;
  border: solid black 1px;
  border-radius: 100px;
  padding: 10px;
  background-color: #ff9900;

  &:hover {
    color: #000;
    font-weight: bold;
    background-color: #ff8800;
  }
`;

const NavbarToggleButton = styled.button`
  position: fixed;
  top: 160px;
  display: inline-block;
  background-color: orange;
  border: solid black 1px;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: auto;
  border-radius: 50px;

  &:hover {
    color: #000;
    font-weight: bold;
    background-color: #ff8800;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavbarToggleButton onClick={toggleNavbar}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </NavbarToggleButton>
      <NavbarContainer style={isOpen ? { left: "0px" } : { left: "-120px" }}>
        <NavbarLinks>
          <NavbarLink href={"/Game501"}>Game 501</NavbarLink>
          <NavbarLink href={"/createplayer"}>Create new player</NavbarLink>
        </NavbarLinks>
      </NavbarContainer>
    </>
  );
}
