import connection from "../utils/db.js";
import users from '../utils/users.js';

export default (req, res, next) => {
    connection.query(
        `select isAdmin from user where email = "${req.header("x-auth-email")}"`,
        (err, results) => {
            if (results[0].isAdmin === 0)
                return res.status(403).send("User doesn't have admin privileges!");
            else
                next();
        }
    )
}