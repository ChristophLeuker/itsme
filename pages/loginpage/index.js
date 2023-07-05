import { Headline, StyledBackbutton } from "../Game501/game";
import LogInForm from "../../components/loginForm";

export default function LogInPage() {
  return (
    <>
      <Headline>Log In:</Headline>
      <LogInForm
        formName={"LogInForm"}
        onSubmit={() => console.log("platzhalter")}
      />
      <StyledBackbutton>Back to Main</StyledBackbutton>
    </>
  );
}
