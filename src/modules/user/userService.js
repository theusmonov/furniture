import { Users } from "../../models/Users.js"
import { NotFoundError } from "../../shared/errors/classes.js"


const getAdmin = async () => {
    const data = Users.findAll({role: "admin"})

    if(!data){
        throw new NotFoundError("Not found admins")
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


export {getAdmin, deleteAdminById}