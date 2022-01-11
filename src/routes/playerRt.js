import express from "express";
import { CreatePlayer, FetchAllPlayers } from "../controllers/playerCon.js";

export const playerRt = express.Router();
    playerRt.post("/", CreatePlayer);
    playerRt.get("/", FetchAllPlayers);




