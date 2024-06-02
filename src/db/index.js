import {Sequelize} from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const connectDb = new Sequelize(process.env.DB_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
   
    logging: false,
})



export default connectDb;