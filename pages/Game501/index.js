import { Headline, StyledBackbutton } from "./game";
import CreateGame from "../../components/createGame";
import Link from "next/link";

export default function SetUpGame({ addPlayersName }) {
  return (
    <>
      <Headline>Setup New Game</Headline>
      <CreateGame onSubmit={addPlayersName} />
      <Link href={"/"}>
        <StyledBackbutton> Back to Main </StyledBackbutton>
      </Link>
    </>
  );
}
