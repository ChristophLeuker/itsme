import dbConnect from "../../../db/connect.js";
import Player from "../../../db/models/Players.js";

export default async function handler(req, response) {
  await dbConnect();

  if (req.method === "GET") {
    const player = await Player.find();

    if (!player) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(player);
  }
}
