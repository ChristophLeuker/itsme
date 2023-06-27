import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href={"/Game501"}>Go to Setup</Link>
      <hr />
      <Link href={"/createplayer"}>Go to createplayer</Link>
    </div>
  );
}
