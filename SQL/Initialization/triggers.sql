use dbproject;
delimiter $$

create trigger user_after_delete
	after delete on user
	for each row
begin
	delete from cart
    where User_user_id = old.user_id;
    
    delete from useraddress
    where User_user_id = old.user_id;
    
    delete from userphonenumbers
    where User_user_id = old.user_id;
end $$

create trigger cart_after_delete
	after delete on cart
	for each row
begin
    delete from dbproject.order
    where Cart_cart_id = old.cart_id;
    
    delete from shipment
    where Cart_cart_id = old.cart_id;
    
    delete from payment
    where Cart_cart_id = old.cart_id;
end $$

create trigger product_after_delete
	after delete on product
	for each row
begin
    delete from productcolors
    where Product_product_id = old.product_id;
    
    delete from pricehistory
    where Product_product_id = old.product_id;
    
    delete from comment
    where Product_product_id = old.product_id;
    
    delete from discountcode
    where Product_product_id = old.product_id;
    
    delete from provider_has_product
    where Product_product_id = old.product_id;
end $$

delimiter ;