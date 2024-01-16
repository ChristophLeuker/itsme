import { Headline } from "./cv/game";
import Navbar from "../components/landingNavbar";
import RssFeedDartn from "@/components/rss";

export default function HomePage() {
  return (
    <>
      <Headline>This is me - Christoph Leuker</Headline>
      <Navbar />
      <RssFeedDartn />
    </>
  );
}
