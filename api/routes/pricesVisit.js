import express from "express"
import { createPricesVisit, deletePricesVisit, updatePricesVisit } from "../controllers/pricesVisitcontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createPricesVisit)

//UPDATE
router.put("/:id", verifyAdmin, updatePricesVisit)

//DELETE
router.delete("/:id", verifyAdmin, deletePricesVisit)

export default router