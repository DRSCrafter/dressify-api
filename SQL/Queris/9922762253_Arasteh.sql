-- Display the list of providers for a product
select distinct p.name
from provider p, provider_has_product php, product pr
where p.provider_id = php.Provider_provider_id and php.Product_product_id = pr.product_id;

-- Display average sales of the store
select avg(p.cost), count(*)
from payment p, cart c, dbproject.order o, product pr
where p.Cart_cart_id = c.cart_id and c.cart_id = o.Cart_cart_id and o.Product_product_id = pr.product_id;

-- Signup
insert into dbproject.user values(default, "firstname", "lastname", default, "email", "password", curdate());

-- Login & Logout
select user_id, password from user where email = "email"; -- The rest of the work is done by API

-- Edit User Data
update user
	set first_name = "another name"
where email = "email";

-- Delete User
delete from user where email = "email";

-- Post Product
insert into product values (default, "name", 0, "size", "material", 0, 1);

-- Edit Product
update product
	set name = "another name"
where product_id = 1;

-- Delete Product
delete from product where name = "name";