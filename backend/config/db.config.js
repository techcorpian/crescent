import mysql from 'mysql2'
import * as dotenv from "dotenv";
dotenv.config();

export const pool = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,  // Number of concurrent connections
    queueLimit: 0
  });

pool.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

export default pool;