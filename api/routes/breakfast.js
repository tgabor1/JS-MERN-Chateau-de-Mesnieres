import express from "express"
import { createBreakfast, deleteBreakfast, updateBreakfast } from "../controllers/breakfastcontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createBreakfast)

//UPDATE
router.put("/:id", verifyAdmin, updateBreakfast)

//DELETE
router.delete("/:id", verifyAdmin, deleteBreakfast)

export default router