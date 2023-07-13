import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 200px;
  left: 10px;
  width: 150px;
  height: 370px;
  background-image: linear-gradient(
    to bottom,
    var(--background-color) 50%,
    var(--button-color) 50%
  );
  background-size: 100% 4px;
  background-repeat: repeat-y;
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
  color: var(--text-button-color);
  text-decoration: none;
  margin-bottom: 0.5rem;
  border: solid black 1px;
  border-radius: 20px;
  padding: 10px;
  background: var(--button-color);
  background: linear-gradient(var(--button-color), var(--button-color-second));
  height: 60px;

  &:hover {
    color: #000;
    font-weight: bold;
    background-color: #ff8800;
  }
`;

const NavbarToggleButton = styled.button`
  position: fixed;
  top: 120px;
  display: inline-block;
  background: var(--button-color);
  background: linear-gradient(var(--button-color), var(--button-color-second));
  border: solid black 1px;
  color: var(--text-button-color);
  font-size: 1rem;
  cursor: pointer;
  margin-left: auto;
  border-radius: 30px;
  height: 60px;
  width: 60px;
`;

export default function Navbar() {
  const { data = [], isLoading } = useSWR("/api/players");
  const [isOpen, setIsOpen] = useState(false);
  if (isLoading) {
    return (
      <>
        <NavbarToggleButton>Menu loading</NavbarToggleButton>
        <NavbarContainer style={{ left: "-120px" }}>
          <NavbarLinks>
            <NavbarLink href={"/Game501"}>Game 501 D.O.</NavbarLink>
            <NavbarLink href={"/createplayer"}>Create new player</NavbarLink>
            <NavbarLink href={"/playerlist"}>All player profiles</NavbarLink>
            <NavbarLink href={"/login"}>Log In</NavbarLink>;
            <NavbarLink href={"/login"}>Log In</NavbarLink>;
          </NavbarLinks>
        </NavbarContainer>
      </>
    );
  }
  /* const id = data[0]._id; */
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavbarToggleButton onClick={toggleNavbar}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </NavbarToggleButton>
      <NavbarContainer style={isOpen ? { left: "-2px" } : { left: "-120px" }}>
        <NavbarLinks>
          <NavbarLink href={"/Game501"}>Game 501 D.O.</NavbarLink>
          <NavbarLink href={"/createplayer"}>Create new player</NavbarLink>
          <NavbarLink href={"/login"}>Log In</NavbarLink>
          <NavbarLink href={`/profilepage/`}>Profile page</NavbarLink>
          <NavbarLink href={"/playerlist"}>All player profiles</NavbarLink>
        </NavbarLinks>
      </NavbarContainer>
    </>
  );
}
