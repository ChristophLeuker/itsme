import dbConnect from "../../../db/connect.js";
import Player from "../../../db/models/Players.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const player = await Player.find();

    if (!player) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(player);
  }

  if (request.method === "POST") {
    try {
      const playerData = request.body;
      await Player.create(playerData);
      response.status(201).json({ status: "Profile successfully created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
