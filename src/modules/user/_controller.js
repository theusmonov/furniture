import { deleteAdminById, getAdmin } from "./userService.js";



export const GetAdminUsers = async (req, res, next) => {
    try {
        const admins = await getAdmin();
        res.status(200).json(admins);
    } catch (error) {
        next(error)
    }
};



export const DeleteAdminById = async (req, res, next) => {
    const {uuid} = req.params
    try {
        const data = await deleteAdminById(uuid);
        return res.status(200).json({ message: 'Admin user deleted successfully' });
    } catch (error) {
        next(error)
    }
};