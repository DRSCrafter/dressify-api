SELECT name FROM dbproject.productcategory;

SELECT Product_product_id as prouct, quantity, total_cost
   FROM dbproject.order;

SELECT review FROM comment c join product p on p.product_id = c.Product_product_id
    where product_product_id = 1