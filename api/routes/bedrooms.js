import express from "express"
import { createBedrooms, deleteBedrooms, updateBedrooms } from "../controllers/bedroomscontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createBedrooms)

//UPDATE
router.put("/:id", verifyAdmin, updateBedrooms)

//DELETE
router.delete("/:id", verifyAdmin, deleteBedrooms)

export default router