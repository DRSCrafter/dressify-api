import users from '../utils/users.js';
import bcrypt from "bcrypt";
import connection from '../utils/db.js';

const editableEntities = ["first_name", "last_name", "isAdmin"];

const controllers = {
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
                    `insert into dbproject.user values(default, "${req.body.first_name}", "${req.body.last_name}", ${req.body.isAdmin}, "${req.body.email}", "${password}", curdate());`,
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
        connection.query(
            `select user_id from user where email = "${req.body.email}"`,
            (err, results) => {
                if (err) return console.log(err);

                const user = results[0];

                if (results.length === 0)
                    return res.status(404).send("User doesn't exist!");

                const exists = users.find(id => id == user.user_id);
                if (!exists)
                    return res.status(400).send("User is not logged in!");

                const index = users.findIndex(id => id == user.user_id);
                users.splice(index, 1);
                console.log(users);
                res.send("Success");
            }
        )
    }, // 19 21
    editUser: (req, res) => {
        const data = req.body;

        if (!data.email)
            return res.status(400).send("User E-mail is needed!");

        if (data.user_id || data.isAdmin)
            return res.status(403).send("Can't change User's signature");

        connection.query(
            `select exists (select user_id from user where email = "${data.email}") AS "exists";`,
            (err, results) => {
                if (results[0].exists === 0)
                    return res.status(400).send("User doesn't exist!");

                let query = "Update user set ";
                for (let entity of Object.keys(data)) {
                    if (entity !== "email" && !editableEntities.includes(entity))
                        return res.status(400).send("Invalid entities can't be edited!");
                    if (entity === "password") {
                        const salt = bcrypt.genSaltSync(10);
                        const password = bcrypt.hashSync(data.password, salt);
                        query += `password = "${password}", `;
                        continue;
                    }
                    query += `${entity} = "${data[entity]}", `;
                }
                const index = query.lastIndexOf(",");
                query = query.slice(0, index);

                query += ` where email = "${data.email}";`;

                connection.query(
                    query,
                    (err) => {
                        if (err) return console.log(err);
                        res.send("Success!");
                    }
                )
            }
        )

    }, // 19 21
    deleteUser: (req, res) => {
        controllers.logout(req, res);
        connection.query(
            `delete from user where email = "${req.body.email}"`,
            (err) => {
                if (err) return res.send(err);
            }
        )
    }, // 19
}


export default controllers;