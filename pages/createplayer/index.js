import { Headline } from "../Game501/game";
import CreateNewPlayer from "../../components/newPlayer";

export default function CreateNewPlayerSite({ addNewPlayerProfile }) {
  return (
    <>
      <Headline>Create new player profile</Headline>
      <CreateNewPlayer onSubmit={addNewPlayerProfile} />
    </>
  );
}
