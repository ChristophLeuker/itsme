import mongoose from "mongoose";

const { Schema, model } = mongoose;

const playerSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  nickname: { type: String },
  hometown: { type: String },
});

const Player = mongoose.models.Player || model("Player", playerSchema);

export default Player;
