import express from "express";
import { CreatePlayer, DeletePlayer, 
    FetchAllPlayers, GetOnePlayer, 
    UpdatePlayer } from "../controllers/playerCon.js";

export const playerRt = express.Router();
    playerRt.post("/", CreatePlayer);
    playerRt.get("/", FetchAllPlayers);
    playerRt.get("/:id", GetOnePlayer);
    playerRt.put("/:id", UpdatePlayer);
    playerRt.delete("/:id", DeletePlayer);




