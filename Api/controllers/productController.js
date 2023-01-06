import users from "../utils/users.js";
import connection from '../utils/db.js';

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