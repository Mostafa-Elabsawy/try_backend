import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todosRouter from "./routes/todo.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/todos", todosRouter);

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://abdelazizmo2022_db_user:v9yaYu6yUrjnu178@cluster0.s8gupjm.mongodb.net/nti-tasks-database?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
