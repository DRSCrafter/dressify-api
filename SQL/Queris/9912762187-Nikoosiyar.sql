SELECT * FROM dbproject.user;

SELECT * FROM dbproject.product;

SELECT distinct name FROM product c join discountCode d on c.product_id = d.Product_product_id
    where d.discount_precentage > 0.15;
    
