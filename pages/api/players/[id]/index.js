import dbConnect from "../../../../db/connect.js";
import Player from "../../../../db/models/Players.js";
import { getToken } from "next-auth/jwt";

export default async function handler(req, response) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const token = await getToken({ req });
    if (!token) {
      return response.status(401).json({ msg: "please log in" });
    }
    const player = await Player.findById(id);

    if (!player) {
      return response.status(404).json({ status: "Not Found" });
    }
    if (token.email === "cleuker87@gmail.com") {
      return response.status(200).json(player);
    }
    if (token.email !== player.email) {
      return response.status(401).json({ message: "Not Allowed" });
    }

    response.status(200).json(player);
  }

  if (req.method === "DELETE") {
    await Player.findByIdAndDelete(id);
    response
      .status(200)
      .json({ status: "Player profile successfully deleted" });
  }

  if (req.method === "PATCH") {
    const updatedPlayer = req.body;
    await Player.findByIdAndUpdate(id, updatedPlayer);
    response.status(200).json({ status: "Player successfully updated" });
  }
}
