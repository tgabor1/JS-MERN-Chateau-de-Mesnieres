import express from "express"
import { createPartners, deletePartners, updatePartners } from "../controllers/partnerscontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createPartners)

//UPDATE
router.put("/:id", verifyAdmin, updatePartners)

//DELETE
router.delete("/:id", verifyAdmin, deletePartners)

export default router