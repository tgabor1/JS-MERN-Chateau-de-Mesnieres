import express from "express"
import { createMedias, deleteMedias, updateMedias } from "../controllers/mediascontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createMedias)

//UPDATE
router.put("/:id", verifyAdmin, updateMedias)

//DELETE
router.delete("/:id", verifyAdmin, deleteMedias)

export default router