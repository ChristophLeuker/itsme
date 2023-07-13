import dbConnect from "../../../../db/connect.js";
import Player from "../../../../db/models/Players.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const player = await Player.findById(id);

    if (!player) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(player);
  }

  if (request.method === "DELETE") {
    await Player.findByIdAndDelete(id);
    response
      .status(200)
      .json({ status: "Player profile successfully deleted" });
  }

  if (request.method === "PATCH") {
    const updatedPlayer = request.body;
    await Player.findByIdAndUpdate(id, updatedPlayer);
    response.status(200).json({ status: "Player successfully updated" });
  }
}
