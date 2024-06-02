import { jwtVerifyToken } from "../../utils/helper.js";
import config from "../config/index.js";
import { UnauthorizedError } from "../errors/classes.js";
import "dotenv/config"

export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']

    if(!token) {
       throw new UnauthorizedError("Token not provided")
    }
    jwtVerifyToken.verify(token, config.jwt.secret, (err, user) => {
        if (err) {
            return res.sendStatus(403);  
        }

     
        if (!user.isAdmin) {
            return res.status(403).json({ message: "Access forbidden: Admins only" });
        }

        req.user = user;
        next();
    });
    
}