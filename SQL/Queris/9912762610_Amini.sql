-- Query 3
SELECT name FROM dbproject.productcategory;
-- Query 4
SELECT Product_product_id as product, quantity, total_cost
   FROM dbproject.order;
-- Query 11
SELECT review FROM comment c join product p on p.product_id = c.Product_product_id
    where product_product_id = 1;
-- Query 10
select Product_product_id, quantity, total_cost 
    from  user u  join dbproject.order o on  u.user_id = o.User_user_id join cart c on o.Cart_cart_id = c.cart_id
    join payment p on c.cart_id = p.Cart_cart_id
    where u.user_id = 1
    order by date_paid desc limit 10;
-- Query 16
SELECT distinct first_name, last_name FROM user u join useraddress ua on u.user_id = ua.User_user_id
    where ua.city = "مشهد";
  
    