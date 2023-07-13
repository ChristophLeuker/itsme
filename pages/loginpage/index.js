import { Headline, StyledBackbutton } from "../Game501/game";
import LogInForm from "../../components/loginForm";
import Link from "next/link";

export default function LogInPage() {
  return (
    <>
      <Headline>Log In:</Headline>
      <LogInForm
        formName={"LogInForm"}
        onSubmit={(data) => console.log(data)}
      />
      <Link href={"/"}>
        <StyledBackbutton>Back to Main</StyledBackbutton>
      </Link>
      <Link href={"/login"}>Login Page</Link>
    </>
  );
}
