import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "Vous n'êtes pas autorisé à accéder à cette page."))
    }
    jwt.verify(token, process.env.JWT, (err, admin) => {
        if (err) return next(createError(403, "Token invalide."));
        req.admin = admin;
        next()
    });
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.id === req.params.id || req.admin.isSuperadmin) {
            next();
        } else {
            return next(createError(403, "Vous n'êtes pas autorisé à accéder à cette page."));
        }
    })
}

export const verifySuperadmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.isSuperadmin) {
            next();
        } else {
            return next (createError(403, "Vous n'êtes pas autorisé à accéder à cette page."));
        }
    })
}