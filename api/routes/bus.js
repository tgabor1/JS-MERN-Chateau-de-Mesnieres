import express from "express"
import { createBus, deleteBus, updateBus } from "../controllers/buscontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createBus)

//UPDATE
router.put("/:id", verifyAdmin, updateBus)

//DELETE
router.delete("/:id", verifyAdmin, deleteBus)

export default router