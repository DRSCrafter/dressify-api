import connection from "../utils/db.js";
import users from '../utils/users.js';

export default (req, res, next) => {
    if (!req.header("x-auth-email"))
        return res.status(400).send("Authorization headers are ");

    connection.query(
        `select user_id from user where email = "${req.header("x-auth-email")}";`,
        (err, results) => {
            if (!results || results.length === 0)
                return res.status(400).send("User doesn't exist!");
            const userID = results[0].user_id;
            const exists = users.find(id => userID === id);
            if (!exists)
                return res.status(403).send("User is not logged in!");
            else
                next();
        }
    )
}