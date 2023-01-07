-- top selling products within a month
select product.name, sum(dbproject.order.quantity) as quantity
from product, dbproject.order, cart, payment
where product_id = Product_product_id and cart_id = dbproject.order.Cart_cart_id and 
cart_id = payment.Cart_cart_id and
year(payment.date_paid) = year(now()) and month(payment.date_paid) = month(now())
group by product.name
order by quantity desc;

-- top selling products within a week
select product.name, sum(dbproject.order.quantity) as quantity
from product, dbproject.order, cart, payment
where product_id = Product_product_id and cart_id = dbproject.order.Cart_cart_id and 
cart_id = payment.Cart_cart_id and
year(payment.date_paid) = year(now()) and week(payment.date_paid) = week(now())
group by product.name
order by quantity desc;

-- top 10 users in month 
select user_id, sum(cost) as totalBuy
from user, cart, payment
where user_id = User_user_id and cart_id = Cart_cart_id and
year(payment.date_paid) = year(now()) and month(payment.date_paid) = month(now())
group by user_id
order by totalBuy desc;

-- top 10 users in week
select user_id, sum(cost) as totalBuy
from user, cart, payment
where user_id = User_user_id and cart_id = Cart_cart_id and
year(payment.date_paid) = year(now()) and week(payment.date_paid) = week(now())
group by user_id
order by totalBuy desc;

-- providers of a city
select distinct name
from provider, provideraddresses
where provider_id = Provider_provider_id and city = "تهران";

-- 3 comments on a product that gave the most point
select star, review
from product, comment
where product.name = "شلوار جین آبی"
order by star desc
limit 3;

-- 3 comments on a product that gave the least point
select star, review
from product, comment
where product.name = "شلوار جین آبی"
order by star asc
limit 3;