import express from "express"
import { deleteAdmin, updateAdmin, getAdmin } from "../controllers/admincontroller.js"
import { verifyToken, verifyAdmin, verifySuperadmin } from "../utils/verifyToken.js"

const router = express.Router()

router.get("/checkauthentification", verifyToken, (req, res, next) => {
    res.send("Vous êtes authentifié.")
})

router.get("/checkadmin/:id", verifyAdmin,(req, res, next) => {
    res.send("Vous êtes authentifié en tant qu'admin.")
})

router.get("/checksuperadmin/:id", verifySuperadmin,(req, res, next) => {
    res.send("Vous êtes authentifié en tant que super admin.")
})

//GET
router.get("/:id", getAdmin)

//UPDATE
router.put("/:id", verifyAdmin, updateAdmin)

//DELETE
router.delete("/:id", verifySuperadmin, deleteAdmin)

export default router