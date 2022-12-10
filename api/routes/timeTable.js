import express from "express"
import { createTimeTable, deleteTimeTable, updateTimeTable } from "../controllers/timeTablecontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createTimeTable)

//UPDATE
router.put("/:id", verifyAdmin, updateTimeTable)

//DELETE
router.delete("/:id", verifyAdmin, deleteTimeTable)

export default router