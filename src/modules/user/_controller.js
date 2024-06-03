import { getAdmin } from "./userService.js";



export const GetAdminUsers = async (req, res, next) => {
    try {
        const admins = await getAdmin();
        res.status(200).json(admins);
    } catch (error) {
        next(error)
    }
};