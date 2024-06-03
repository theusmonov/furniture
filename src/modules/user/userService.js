import { Users } from "../../models/Users.js"
import { NotFoundError } from "../../shared/errors/classes.js"


const getAdmin = async () => {
    const data = Users.findOne({role: "admin"})

    if(!data){
        throw new NotFoundError("Not found admin")
    }

    return data;
}


export {getAdmin}