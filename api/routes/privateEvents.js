import express from "express"
import { createPrivateEvents, deletePrivateEvents, updatePrivateEvents } from "../controllers/privateEventscontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createPrivateEvents)

//UPDATE
router.put("/:id", verifyAdmin, updatePrivateEvents)

//DELETE
router.delete("/:id", verifyAdmin, deletePrivateEvents)

export default router