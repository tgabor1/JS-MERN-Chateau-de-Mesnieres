import express from "express"
import { createDorms, deleteDorms, updateDorms } from "../controllers/dormscontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createDorms)

//UPDATE
router.put("/:id", verifyAdmin, updateDorms)

//DELETE
router.delete("/:id", verifyAdmin, deleteDorms)

export default router