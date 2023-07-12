import { Headline, StyledBackbutton } from "../Game501/game";
import LogInForm from "../../components/loginForm";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Hier kannst du den Anmelde-Request an deine API senden
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("response war ok");

      // Prüfe, ob der "Remember Me"-Status ausgewählt wurde
      if (rememberMe) {
        localStorage.setItem("isLoggedIn", "true");
      }
      console.log("Jap, ist angemeldet");
      // Führe hier weitere Logik für eine erfolgreiche Anmeldung durch
    } else {
      console.log("Fehler beim anmelden");
      // Hier kannst du Fehlerbehandlung für ungültige Anmeldeversuche implementieren
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      // Führe hier die Anmelde-Logik für den eingeloggten Benutzer durch
    }
  }, []);

  return (
    <>
      <Headline>Log In:</Headline>
      <LogInForm formName={"LogInForm"} onSubmit={handleLogin} />
      <Link href={"/"}>
        <StyledBackbutton>Back to Main</StyledBackbutton>
      </Link>
    </>
  );
}
