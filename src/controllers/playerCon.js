import { pool } from "../config/database.js";

export const CreatePlayer =
async (req, res, next) => {
    try {
        const { title, first, last, age, info } = req.body;
        const createQuery = `INSERT INTO players 
        (title, first, last, age, info) 
        VALUES($1, $2, $3, $4, $5) RETURNING *`;
        const values = [title, first, last, age, info];
        const newPlayer = await pool.query(createQuery, values);
        res.status(200).json(newPlayer.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const FetchAllPlayers =
async (req, res, next) => {
    try {
        const fetchAllQry = "SELECT * FROM players";
        const allPlayers = await pool.query(fetchAllQry);
        res.json(allPlayers.rows);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetOnePlayer =
async (req, res, next) => {
    try {
        const { id } = req.params;
        const getOneQuery = `
            SELECT * FROM players
            WHERE ID = $1
        `;
        const values = [id];
        const player = await pool.query(getOneQuery, values);
        res.json(player.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const UpdatePlayer =
async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, first, last, age, info } = req.body;
        const updateQry = `UPDATE players 
        SET title = $1, first = $2, last = $3, age = $4, info = $5 
        WHERE id = $6 RETURNING *`;
        const values = [title, first, last, age, info, id];
        const updatePlayer = await pool.query(updateQry, values);
        res.status(200).json(updatePlayer);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const DeletePlayer =
async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteQry = 
            "DELETE FROM players WHERE id = $1";
        const values = [id];
        const deletePlayer = 
            await pool.query(deleteQry, values);
        res.status(200).json("The Player was Deleted!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};







