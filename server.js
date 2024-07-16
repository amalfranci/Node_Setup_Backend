// server.js or index.js

import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import router from './routes/routes.js';
import dbCon from './utlies/db.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS with specific methods and credentials
app.use(
  cors({
    origin: 'http://localhost:3000', 
    methods: ['POST', 'GET', 'DELETE', 'PUT'], 
    credentials: true, 
  })
);

app.use(cookieParser());

// Middleware to parse JSON
app.use(express.json());

app.use("/api/home", (req, res) => {

  res.status(200).json({ message: "welcome to home backend" });
});

// Database connection
dbCon();

// Routes
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
