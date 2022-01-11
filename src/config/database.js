import pgk from "pg";
const { Pool } = pgk;

const connectionString = process.env.DATABASE_URL;

export const pool = new Pool({
    connectionString
});




