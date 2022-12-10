import express from "express"
import { createFood, deleteFood, updateFood } from "../controllers/foodcontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createFood)

//UPDATE
router.put("/:id", verifyAdmin, updateFood)

//DELETE
router.delete("/:id", verifyAdmin, deleteFood)

export default router