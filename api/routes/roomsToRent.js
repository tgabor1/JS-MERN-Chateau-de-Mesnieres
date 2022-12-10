import express from "express"
import { createRoomsToRent, deleteRoomsToRent, updateRoomsToRent } from "../controllers/roomsToRentcontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createRoomsToRent)

//UPDATE
router.put("/:id", verifyAdmin, updateRoomsToRent)

//DELETE
router.delete("/:id", verifyAdmin, deleteRoomsToRent)

export default router