import Admin from "../models/Admin.js";

//GET
export const getAdmin = async (req,res,next) =>{
    try{
        const admin = await Admin.findById(req.params.id)
        res.status(200).json(admin)
    } catch (err){
        next(err)
    }
}

//UPDATE
export const updateAdmin = async (req, res, next) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedAdmin)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteAdmin = async (req, res, next) => {
    try {
        await Admin.findByIdAndDelete(req.params.id)
        res.status(200).json("L'administrateur a été supprimé.")
    } catch (err) {
        next(err);
    }
}