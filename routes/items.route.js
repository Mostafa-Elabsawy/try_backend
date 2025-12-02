import express from "express";

import { getAllItems, createItem } from "../controllers/items.controller.js";

const itemsRouter = express.Router();

itemsRouter.get("/", getAllItems);

itemsRouter.post("/", createItem);

export default itemsRouter;
