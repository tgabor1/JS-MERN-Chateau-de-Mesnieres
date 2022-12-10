import express from "express"
import { createJobOffers, deleteJobOffers, updateJobOffers } from "../controllers/jobOfferscontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createJobOffers)

//UPDATE
router.put("/:id", verifyAdmin, updateJobOffers)

//DELETE
router.delete("/:id", verifyAdmin, deleteJobOffers)

export default router