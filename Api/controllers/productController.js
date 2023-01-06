import users from "../utils/users.js";
import connection from '../utils/db.js';
import bcrypt from "bcrypt";

const editableEntities = ["name", "discountable", "size", "material", "stock"];

export default {
    getProducts: (req, res) => {
    }, // 1
    getCategories: (req, res) => {
    }, // 3
    getTopWeek: (req, res) => {
    }, // 6
    getTopMonth: (req, res) => {
    }, // 6
    getSpecialOff: (req, res) => {
    }, // 7
    getProviders: (req, res) => {
    }, // 8
    getCheapestProvider: (req, res) => {
    }, // 9
    getComments: (req, res) => {
    }, // 12
    getBestComments: (req, res) => {
    }, // 13
    getWorstComments: (req, res) => {
    }, // 14
    getSalesStats: (req, res) => {
    }, // 15
    getAverageSales: (req, res) => {
    }, // 16
    postProduct: (req, res) => {
        const data = req.body;

        connection.query(
            `insert into product values (default, "${data.name}", ${data.discountable}, "${data.size}", "${data.material}", ${req.body.stock}, ${data.category})`,
            (err, results) => {
                if (err) return console.log(err);
                res.send("Success!");
            })
    }, // 20
    editProduct: (req, res) => {
        const data = req.body;

        if (!data.product_id)
            return res.status(400).send("Product ID is needed!");

        if (data.ProductCategory_category_id)
            return res.status(403).send("Can't change Product's signature");

        connection.query(
            `select exists (select product_id from product where product_id = "${data.product_id}") AS "exists";`,
            (err, results) => {
                if (results[0].exists === 0)
                    return res.status(400).send("Product doesn't exist!");

                let query = "Update product set ";
                for (let entity of Object.keys(data)) {
                    if (entity !== "product_id" && !editableEntities.includes(entity))
                        return res.status(400).send("Invalid entities can't be edited!");
                    query += `${entity} = "${data[entity]}", `;
                }
                const index = query.lastIndexOf(",");
                query = query.slice(0, index);

                query += ` where product_id = "${data.product_id}";`;

                connection.query(
                    query,
                    (err) => {
                        if (err) return console.log(err);
                        res.send("Success!");
                    }
                )
            }
        )

    }, // 20
    deleteProduct: (req, res) => {
        connection.query(
            `delete from product where name = ${req.body.name}`,
            (err, results) => {
                if (err) return console.log(err);
                res.send("Success!");
            })
    }, // 20
}