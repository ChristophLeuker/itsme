import dbConnect from "../../../db/connect.js";
import Player from "../../../db/models/Players.js";
import { getToken } from "next-auth/jwt";

export default async function handler(req, response) {
  await dbConnect();

  if (req.method === "GET") {
    const token = await getToken({ req });
    if (!token) {
      return response.status(401).json({ msg: "please log in" });
    }
    const player = await Player.find();

    if (!player) {
      return response.status(404).json({ status: "Not Found" });
    }

    if (token.email !== "cleuker87@gmail.com") {
      return response.status(401).json({ message: "Not Allowed" });
    }

    response.status(200).json(player);
  }

  if (req.method === "POST") {
    try {
      const playerData = req.body;
      await Player.create(playerData);
      response.status(201).json({ status: "Profile successfully created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
