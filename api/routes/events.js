import express from "express"
import { createEvents, deleteEvents, updateEvents } from "../controllers/eventscontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createEvents)

//UPDATE
router.put("/:id", verifyAdmin, updateEvents)

//DELETE
router.delete("/:id", verifyAdmin, deleteEvents)

export default router