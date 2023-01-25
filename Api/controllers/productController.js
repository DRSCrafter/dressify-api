import connection from '../utils/db.js';

const editableEntities = ["name", "discountable", "size", "material", "stock"];

export default {
    getProducts: (req, res) => {
        // SELECT * FROM product;
        connection.query(
            'SELECT * FROM product;',
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 1
    getCategories: (req, res) => {
        // SELECT name FROM productcategory;
        connection.query(
            'SELECT name FROM productcategory;',
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 3
    getTopWeek: (req, res) => {
        // select product.name, sum(dbproject.order.quantity) as quantity
        // from product, dbproject.order, cart, payment
        // where product_id = Product_product_id and cart_id = dbproject.order.Cart_cart_id and
        // cart_id = payment.Cart_cart_id and
        // year(payment.date_paid) = year(now()) and week(payment.date_paid) = week(now())
        // group by product.name
        // order by quantity desc;
        connection.query(
            `select product.name, sum(${process.env.DB_NAME}.order.quantity) as quantity
                from product, ${process.env.DB_NAME}.order, cart, payment
                where product_id = Product_product_id and cart_id = ${process.env.DB_NAME}.order.Cart_cart_id and cart_id = payment.Cart_cart_id 
                and year(payment.date_paid) = year(now()) and week(payment.date_paid) = week(now()) 
                group by product.name
                order by quantity desc;`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 6
    getTopMonth: (req, res) => {
        // select product.name, sum(dbproject.order.quantity) as quantity
        // from product, dbproject.order, cart, payment
        // where product_id = Product_product_id and cart_id = dbproject.order.Cart_cart_id and
        // cart_id = payment.Cart_cart_id and
        // year(payment.date_paid) = year(now()) and month(payment.date_paid) = month(now())
        // group by product.name
        // order by quantity desc;
        connection.query(
            `select product.name, sum(${process.env.DB_NAME}.order.quantity) as quantity 
                from product, ${process.env.DB_NAME}.order, cart, payment 
                where product_id = Product_product_id and cart_id = ${process.env.DB_NAME}.order.Cart_cart_id and cart_id = payment.Cart_cart_id 
                and year(payment.date_paid) = year(now()) and month(payment.date_paid) = month(now()) 
                group by product.name 
                order by quantity desc;`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 6
    getSpecialOff: (req, res) => {
        // SELECT distinct name FROM product c join discountCode d on c.product_id = d.Product_product_id
        // where d.discount_precentage > 0.15;
        connection.query(
            'SELECT distinct name ' +
                'FROM product c ' +
                'join discountCode d ' +
                'on c.product_id = d.Product_product_id ' +
                'where d.discount_precentage > 0.15;',
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 7
    getProviders: (req, res) => {
        // select distinct p.name
        // from provider p, provider_has_product php, product pr
        // where p.provider_id = php.Provider_provider_id and php.Product_product_id = pr.product_id;
        connection.query(
            `select distinct p.name 
                 from provider p, provider_has_product php, product pr 
                 where p.provider_id = php.Provider_provider_id and php.Product_product_id = pr.product_id and pr.product_id = ${req.params.productID};`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 8
    getCheapestProvider: (req, res) => {
        // select p.name
        // from provider p, pricehistory ph
        // where p.provider_id = ph.Provider_provider_id and value = (select min(value) from pricehistory where Product_product_id = 1);
        connection.query(
            `select p.name 
                 from provider p, pricehistory ph 
                 where p.provider_id = ph.Provider_provider_id and value = (select min(value) from pricehistory where Product_product_id = ${req.params.productID}) limit 1;`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 9
    getComments: (req, res) => {
        // SELECT review FROM comment c join product p on p.product_id = c.Product_product_id
        // where product_product_id =
        connection.query(
            `SELECT review 
                 FROM comment c 
                 join product p 
                 on p.product_id = c.Product_product_id 
                 where product_product_id = ${req.params.productID}`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 12
    getBestComments: (req, res) => {
        // select star, review
        // from product, comment
        // where product.name = "شلوار جین آبی"
        // order by star desc
        // limit 3;
        connection.query(
            `select star, review 
                 from product, comment 
                 where product.product_id = ${req.params.productID} 
                 order by star desc limit 3;`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 13
    getWorstComments: (req, res) => {
        // select star, review
        // from product, comment
        // where product.name = "شلوار جین آبی"
        // order by star asc
        // limit 3;
        connection.query(
            `select star, review 
                 from product, comment 
                 where product.product_id = ${req.params.productID} 
                 order by star asc limit 3;`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 14
    getSalesStats: (req, res) => {
        // select p.name, sum(o.quantity) as "Quantity", sum(o.total_cost) as "Total Payment"
        // from product p, dbproject.order o, cart c, payment pa
        // where p.product_id = o.Product_product_id and o.Cart_cart_id = c.cart_id and pa.Cart_cart_id = c.cart_id
        // and p.product_id = 1 and pa.date_paid >= DATE(NOW() - INTERVAL 1 MONTH);
        connection.query(
            `select p.name, sum(o.quantity) as "Quantity", sum(o.total_cost) as "Total Payment" 
                 from product p, ${process.env.DB_NAME}.order o, cart c, payment pa 
                 where p.product_id = o.Product_product_id and o.Cart_cart_id = c.cart_id and pa.Cart_cart_id = c.cart_id 
                 and p.product_id = ${req.params.productID} and pa.date_paid >= DATE(NOW() - INTERVAL 1 MONTH);`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 15
    getAverageSales: (req, res) => {
        // select avg(p.cost), count(*)
        // from payment p, cart c, dbproject.order o, product pr
        // where p.Cart_cart_id = c.cart_id and c.cart_id = o.Cart_cart_id and o.Product_product_id = pr.product_id;
        connection.query(
            `select avg(p.cost) AS "Average sales", count(*) AS "Sales Count" 
                from payment p, cart c, ${process.env.DB_NAME}.order o, product pr 
                where p.Cart_cart_id = c.cart_id and c.cart_id = o.Cart_cart_id and o.Product_product_id = pr.product_id;`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    }, // 16
    postProduct: (req, res) => {
        const data = req.body;

        connection.query(
            `select exists (select product_id from product where name = "${data.name}") AS "exists";`,
            (err, results) => {
                if (results[0].exists === 1)
                    return res.status(400).send("Product with this name already exists");

                connection.query(
                    `insert into product 
                         values (default, "${data.name}", ${data.discountable}, "${data.size}", "${data.material}", ${data.stock}, ${data.category})`,
                    (err, results) => {
                        if (err) return console.log(err);
                        res.send("Success!");
                    });
            }
        );

    }, // 20
    editProduct: (req, res) => {
        const data = req.body;

        if (!data.product_id)
            return res.status(400).send("Product ID is needed!");

        if (data.ProductCategory_category_id)
            return res.status(403).send("Can't change Product's signature");

        connection.query(
            `select exists (select product_id from product where product_id = ${data.product_id}) AS "exists";`,
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
            `select exists (select product_id from product where name = "${req.body.name}") AS "exists";`,
            (err, results) => {
                if (err) return console.log(err);

                if (results[0].exists === 0)
                    return res.status(400).send("Product doesn't exist");

                connection.query(
                    `delete from product where name = "${req.body.name}";`,
                    (err, results) => {
                        if (err) return console.log(err);
                        res.send("Success!");
                    }
                );
            }
        )
    }, // 20
}