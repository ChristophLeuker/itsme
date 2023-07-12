/* import { connectToDatabase } from "../../../lib/mongodb"; */
import dbConnect from "../../../db/connect.js";
import Player from "../../../db/models/Players.js";

export default async function login(req, res) {
  await dbConnect();
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required" });
    return;
  }

  /* const { db } = await connectToDatabase();

  const player = await db.collection("players").findOne({ email, password }); */

  const player = await Player.findOne({ email, password });

  if (!player) {
    res.status(401).json({ message: "Invalid email or password" });
    console.log("kein player gefunden");
    return;
  }

  console.log(`player gefunden: ${player}`);
  // Hier kannst du die Logik für die erfolgreiche Anmeldung implementieren
  // Zum Beispiel das Setzen von Cookies oder Erstellen einer Sitzung

  res.status(200).json({ message: "Login successful" });
}
