import express from "express";
import { HomeIndex } from "../controllers/playerCon.js";

export const playerRt = express.Router();
    playerRt.get("/", HomeIndex);




