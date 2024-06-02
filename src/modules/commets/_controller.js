import { userAddCommet } from "./commetService.js"



const UserAddCommet = async (req, res, next) => {
    try {
        const data = await userAddCommet(req.body);
        return res.status(201).json({message: "User commet added successfully", data})
    } catch (err) {
        next(err)
    }
}


export {UserAddCommet}