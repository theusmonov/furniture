import { Users } from "../../models/Users.js"
import { NotFoundError } from "../../shared/errors/classes.js"


const getAdmin = async () => {
    const data = Users.findAll({where: {
        role: "admin"
    }})

    if(!data){
        throw new NotFoundError("Not found admins")
    }

    return data;
}


const getUsers = async () => {
    const data = Users.findAll({where: {
        role: "user"
    }})

    if(!data){
        throw new NotFoundError("Not found users")
    }

    return data;
}

const deleteAdminById = async (uuid) => {

    const data = Users.findByPk(uuid);
    if(!data){
        throw new NotFoundError("Not found this uuid admin")
    }

    await Users.destroy({ where: { id: uuid } });
}


export {getAdmin, deleteAdminById, getUsers}