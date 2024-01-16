import { Headline } from "./Game501/game";
import Navbar from "../components/landingNavbar";
import RssFeedDartn from "@/components/rss";

export default function HomePage() {
  return (
    <>
      <Headline>Throw In - Die Dart App</Headline>
      <Navbar />
      <RssFeedDartn />
    </>
  );
}
