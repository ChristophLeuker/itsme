import { useSession, signIn, signOut } from "next-auth/react";

export default function LogInTest() {
  const { data: session } = useSession();
  return (
    <>
      <h1>Log In:</h1>
      {session ? (
        <>
          <button type="button" onClick={signOut}>
            Logout here
          </button>
          <p>sign in as {session.user.email}</p>
        </>
      ) : (
        <button type="button" onClick={() => signIn("github")}>
          LogIn here
        </button>
      )}
    </>
  );
}
