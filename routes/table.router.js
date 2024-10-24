import express from "express";
const tableRouter = express.Router();
import { getTable, addTable } from "../controllers/table.controller.js";

tableRouter.get('/tables', getTable);
tableRouter.post('/tables', addTable);

export default tableRouter