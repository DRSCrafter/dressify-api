import users from '../services/users.js';
import bcrypt from "bcrypt";
import {db, admin} from '../services/db.js';

const editableEntities = ["first_name", "last_name", "isAdmin"];

const controllers = {
    getUsers: (req, res) => {
        admin.query(
            `SELECT * FROM user;`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 2
    getTopWeek: (req, res) => {
        db.query(
            'select user_id, sum(cost) as totalBuy ' +
            'from user, cart, payment ' +
            'where user_id = User_user_id and cart_id = Cart_cart_id and year(payment.date_paid) = year(now()) and week(payment.date_paid) = week(now()) ' +
            'group by user_id ' +
            'order by totalBuy desc;',
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 5
    getTopMonth: (req, res) => {
        db.query(
            'select user_id, sum(cost) as totalBuy ' +
            'from user, cart, payment ' +
            'where user_id = User_user_id and cart_id = Cart_cart_id and year(payment.date_paid) = year(now()) and month(payment.date_paid) = month(now()) ' +
            'group by user_id ' +
            'order by totalBuy desc;',
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 5
    getOrders: (req, res) => {
        db.query(
            `select o.order_id, p.name, o.quantity, o.total_cost, o.DiscountCode_discount_code_id 
                from user u, dbproject.order o, product p 
                where u.user_id = o.User_user_id and o.Product_product_id = p.product_id 
                and u.email = "${req.header("x-auth-email")}";`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 4
    getLatestOrders: (req, res) => {
        db.query(
            `select Product_product_id, quantity, total_cost 
                 from user u 
                 join dbproject.order o on 
                 u.user_id = o.User_user_id 
                 join cart c 
                 on o.Cart_cart_id = c.cart_id 
                 join payment p 
                 on c.cart_id = p.Cart_cart_id 
                 where u.email = "${req.header("x-auth-email")}" 
                 order by date_paid desc 
                 limit 10;`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 11
    getUsersInCity: (req, res) => {
        db.query(
            `SELECT distinct first_name, last_name 
                 FROM user u join useraddress ua on u.user_id = ua.User_user_id 
                 where ua.city = "${req.params.city}";`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 17
    signUp: (req, res) => {
        db.query(
            `select exists(select user_id from user where email = "${req.body.email}") AS "exists";`,
            (err, results) => {
                if (err) return console.log(err);
                if (results[0].exists) return res.send("User Already Exists");

                // const salt = bcrypt.genSaltSync(10);
                // const password = bcrypt.hashSync(req.body.password, salt);

                db.query(
                    `insert into dbproject.user
                     values (default, "${req.body.first_name}", "${req.body.last_name}", ${req.body.isAdmin},
                             "${req.body.email}", "${req.body.password}", curdate());`,
                    (err) => {
                        if (err) return console.log(err);
                    }
                );

                db.query(
                    `select user_id
                     from dbproject.user
                     where email = "${req.body.email}";`,
                    (err, results) => {
                        if (err) return console.log(err);
                        const userID = results[0].user_id;
                        users.login(userID);

                        let addresses = `insert into dbproject.useraddress values`;
                        for (let address of req.body.addresses)
                            addresses += `("${address.city}", "${address.street}", ${userID}),`
                        let index = addresses.lastIndexOf(',');
                        addresses = addresses.slice(0, index);
                        addresses += ';';
                        admin.query(
                            addresses,
                            (err) => {
                                if (err) return console.log(err);
                            }
                        );

                        let phoneNumbers = `insert into dbproject.userphonenumbers values`;
                        for (let phoneNumber of req.body.phoneNumbers)
                            phoneNumbers += `("${phoneNumber}", ${userID}),`
                        index = phoneNumbers.lastIndexOf(',');
                        phoneNumbers = phoneNumbers.slice(0, index);
                        phoneNumbers += ';';
                        admin.query(
                            phoneNumbers,
                            (err) => {
                                if (err) return console.log(err);
                            }
                        );
                    }
                );
                res.send("Done");
            }
        );
    }, // 19
    login: (req, res) => {
        if (!req.body.email || !req.body.password)
            return res.status(400).send("Invalid User Credentials!");

        db.query(
            `select user_id, password
             from user
             where email = "${req.body.email}" and password = "${req.body.password}"`,
            (err, results) => {
                if (err) return console.log(err);

                const user = results[0];

                if (results.length === 0)
                    return res.status(404).send("User doesn't exist!(or incorrect password)");

                const exists = users.isLoggedIn(user.user_id);
                if (exists)
                    return res.status(400).send("User is already logged in!");

                // const isVaildPassword = bcrypt.compareSync(req.body.password, user.password);
                // if (!isVaildPassword)
                //     return res.status(400).send("Incorrect Password!");

                users.login(user.user_id);
                res.send("Success");
            }
        )
    }, // 19
    logout: (req, res) => {
        db.query(
            `select user_id
             from user
             where email = "${req.header('x-auth-email')}"`,
            (err, results) => {
                if (err) return console.log(err);

                const user = results[0];

                users.logout(user.user_id);
                res.send("Success");
            }
        )
    }, // 19 21
    editUser: (req, res) => {
        const data = req.body;

        if (data.user_id || data.isAdmin)
            return res.status(403).send("Can't change User's signature");

        db.query(
            `select exists(select user_id from user where email = "${req.header('x-auth-email')}") AS "exists";`,
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

                db.query(
                    query,
                    (err) => {
                        if (err) return console.log(err);
                        res.send("Success!");
                    }
                )
            }
        )

    }, // 19 21
    postAddress: (req, res) => {
        db.query(
            `select user_id
                 from dbproject.user
                 where email = "${req.header("x-auth-email")}";`,
            (err, results) => {
                if (err) return console.log(err);
                const userID = results[0].user_id;

                let addresses = `insert into dbproject.useraddress values`;
                for (let address of req.body.addresses)
                    addresses += `("${address.city}", "${address.street}", ${userID}),`
                const index = addresses.lastIndexOf(',');
                addresses = addresses.slice(0, index);
                addresses += ';';
                db.query(
                    addresses,
                    (err) => {
                        if (err) return console.log(err);
                    }
                );
            }
        );
        res.send("Done");
    },
    postPhoneNumber: (req, res) => {
        db.query(
            `select user_id
                 from dbproject.user
                 where email = "${req.header("x-auth-email")}";`,
            (err, results) => {
                if (err) return console.log(err);
                const userID = results[0].user_id;

                let phoneNumbers = `insert into dbproject.userphonenumbers values`;
                for (let phoneNumber of req.body.phoneNumbers)
                    phoneNumbers += `("${phoneNumber}", ${userID}),`
                const index = phoneNumbers.lastIndexOf(',');
                phoneNumbers = phoneNumbers.slice(0, index);
                phoneNumbers += ';';
                db.query(
                    phoneNumbers,
                    (err) => {
                        if (err) return console.log(err);
                    }
                );
            }
        );
        res.send("Done");
    },
    deleteUser: (req, res) => {
        controllers.logout(req, res);
        db.query(
            `delete from user where email = "${req.body.email}"`,
            (err) => {
                if (err) return res.send(err);
            }
        );
        res.send("Done");
    }, // 19
    deletePhoneNumber: (req, res) => {
        db.query(
            `delete from dbproject.userphonenumbers
                         where User_user_id = (select user_id from dbproject.user where email = "${req.header("x-auth-email")}") 
                         and phone_number = "${req.body.phoneNumber}"`,
            (err) => {
                if (err) return console.log(err);
            }
        );
        res.send("Done");
    },
    deleteAddress: (req, res) => {
        db.query(
            `delete from dbproject.useraddress
                         where User_user_id = (select user_id from dbproject.user where email = "${req.header("x-auth-email")}")
                         and city = "${req.body.city}" and street = "${req.body.street}"`,
            (err) => {
                if (err) return console.log(err);
            }
        );
        res.send("Done");
    }
}


export default controllers;