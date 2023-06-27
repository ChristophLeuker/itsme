import Link from "next/link";
import { Headline } from "./game";
import CreateGame from "@/components/createGame";

export default function SetUpGame({ addPlayersName }) {
  return (
    <>
      <Headline>Setup New Game</Headline>
      <CreateGame onSubmit={addPlayersName} />
    </>
  );
}
