import mysql from 'mysql2'
import * as dotenv from "dotenv";
dotenv.config();

export const pool = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
  });

pool.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

export default pool;