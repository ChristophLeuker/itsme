import Link from "next/link";
import { Headline } from "./game";
import CreateGame from "@/components/createGame";

export default function SetUpGame() {
  return (
    <>
      <Headline>Setup New Game</Headline>
      <CreateGame />
      <Link href={"Game501/game"}>Go to the Game</Link>
    </>
  );
}
