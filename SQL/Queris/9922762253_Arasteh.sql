-- Display the list of providers for a product
select distinct p.name
from provider p, provider_has_product php, product pr
where p.provider_id = php.Provider_provider_id and php.Product_product_id = pr.product_id;