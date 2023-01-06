import users from '../data/users.js';
import bcrypt from "bcrypt";

export default (connection) => ({
    getUsers: (req, res) => {
    }, // 2
    getTopWeek: (req, res) => {
    }, // 5
    getTopMonth: (req, res) => {
    }, // 5
    getOrders: (req, res) => {
    }, // 4
    getLatestOrders: (req, res) => {
    }, // 11
    getUsersInCity: (req, res) => {
    }, // 17
    signUp: (req, res) => {
        connection.query(
            `select exists (select user_id from user where email = "${req.body.email}") AS "exists";`,
            (err, results) => {
                if (err) return console.log(err);
                if (results[0].exists) return res.send("User Already Exists");

                const salt = bcrypt.genSaltSync(10);
                const password = bcrypt.hashSync(req.body.password, salt);

                connection.query(
                    `insert into dbproject.user values(default, "${req.body.firstname}", "${req.body.lastname}", default, "${req.body.email}", "${password}", curdate());`,
                    (err) => {
                        if (err) return console.log(err);
                    }
                );

                connection.query(
                    `select user_id from dbproject.user where email = "${req.body.email}";`,
                    (err, results) => {
                        if (err) return console.log(err);
                        users.push(results[0].user_id);
                    }
                );
                res.send("Done");
            }
        );
    }, // 19
    login: (req, res) => {
        if (!req.body.email || !req.body.password)
            return res.status(400).send("Invalid User Credentials!");

        connection.query(
            `select user_id, password from user where email = "${req.body.email}"`,
            (err, results) => {
                if (err) return console.log(err);

                const user = results[0];

                if (results.length === 0)
                    return res.status(404).send("User doesn't exist!");

                const exists = users.find(id => id == user.user_id);
                if (exists)
                    return res.status(400).send("User is already logged in!");

                const isVaildPassword = bcrypt.compareSync(req.body.password, user.password);
                if (!isVaildPassword)
                    return res.status(400).send("Incorrect Password!");

                users.push(user.user_id);
                res.send("Success");
            }
        )
    }, // 19
    logout: (req, res) => {
    }, // 19 21
    editUser: (req, res) => {
    }, // 19 21
    deleteUser: (req, res) => {
    }, // 19
    deleteUserImmediate: (req, res) => {
    } // 21
})