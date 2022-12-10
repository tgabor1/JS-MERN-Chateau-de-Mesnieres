import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newAdmin = new Admin({
            username: req.body.username,
            password: hash,
            user_firstname: req.body.user_firstname,
            user_lastname: req.body.user_lastname,
            user_email: req.body.user_email,
            user_question: req.body.user_question,
            user_answer: req.body.user_answer,
            user_birthday: req.body.user_birthday,
            user_endcontract: req.body.user_endcontract,
        })

        await newAdmin.save()
        res.status(200).send("L'administrateur a été créé avec succès")
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const admin = await Admin.findOne({ username: req.body.username })
        if (!admin) return next(createError(404, "L'administrateur n'a pas été trouvé"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, admin.password)
        if (!isPasswordCorrect) return next(createError(400, "Mot de passe ou nom d'utilisateur incorrect"))
        
        // Vérification si superadmin ou pas grâce à jsonwebtoken
        const token = jwt.sign({ id: admin._id, isSuperadmin: admin.isSuperadmin }, process.env.JWT)

        const { password, isSuperadmin, ...otherDetails } = admin._doc
        res.cookie("access_token", token, { httpOnly: true, }).status(200).json({ ...otherDetails });
    } catch (err) {
        next(err)
    }
}