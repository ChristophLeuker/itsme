import { Headline } from "./Game501/game";
import Navbar from "../components/landingNavbar";
import RssFeedDartn from "@/components/rss";
import LayoutLanding from "@/components/layout/landingpagelayout.js";

export default function HomePage() {
  return (
    <>
      <LayoutLanding>
        <Headline>Throw In - Dart App</Headline>
        <Navbar />
        <RssFeedDartn />
      </LayoutLanding>
    </>
  );
}
