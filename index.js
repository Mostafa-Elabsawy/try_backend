import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/connect.js";
import itemsRouter from "./routes/items.route.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// root route
app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

// items route
app.use("/api/items", itemsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
