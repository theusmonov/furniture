import { adminDeleteCommetUser, userAddCommet, userCommetGet } from "./commetService.js"



const UserAddCommet = async (req, res, next) => {
    try {
        const data = await userAddCommet(req.body);
        return res.status(201).json({message: "User commet added successfully", data})
    } catch (err) {
        next(err)
    }
}


const UserGetAllCommets = async (req, res, next) => {
    try {
        const data = await userCommetGet();
        return res.status(200).json({message: "Users all commets", commets: data})
    } catch (err) {
        next(err)
    }
}

const AdminDeleteCommetUser = async (req, res, next) => {
    const {uuid} = req.params
    try {
        const data = await adminDeleteCommetUser(uuid);
        return res.status(200).json({message: "Commet deleted"})
    } catch (err) {
        next(err)
    }
}

export {UserAddCommet, UserGetAllCommets, AdminDeleteCommetUser}