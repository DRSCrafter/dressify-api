SELECT * FROM dbproject.user;

SELECT * FROM dbproject.product;

-- محصولات ویژه
SELECT distinct name FROM dbproject.product c join dbproject.discountCode d on c.product_id = d.Product_product_id
   where d.discount_precentage > 0.15;

-- ارزان فروش ترین فروشنده ی آیتم
SELECT q.name,q.value,q.provider_id from 
(SELECT p.product_id,p.name,(ph.value),pr.provider_id
from dbproject.pricehistory ph
join dbproject.product p on p.product_id = ph.Product_product_id
join dbproject.provider_has_product php on php.Product_product_id = p.product_id and php.provider_has_product_ID = ph.provider_has_product_ID
join dbproject.provider pr on php.provider_provider_id = pr.provider_id
where p.product_id = 7) q;

-- میزان فروش یک کالا در ماه
SELECT p.product_id,p.name,sum(py.cost)
from dbproject.product p
join dbproject.order o on o.Product_product_id = p.product_id
join dbproject.cart c on c.cart_id = o.Cart_cart_id
join dbproject.payment py on py.Cart_cart_id = c.cart_id
where p.product_id = 1
-- and py.date_paid between current_date() and date_add(current_date() , Interval 30 day)






