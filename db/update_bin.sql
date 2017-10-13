update products set Name = $2 where productid = $1;
update products set price = $3 where productid = $1;
select * from products where productid = $1;