-- API
create user dressify_api@127.0.0.1 identified by '12345678';
grant 
select on dbproject.*
to dressify_api@127.0.0.1;
grant 
insert, update on dbproject.user
to dressify_api@127.0.0.1;
grant
insert, delete on dbproject.useraddress
to dressify_api@127.0.0.1;
grant
insert, delete on dbproject.userphonenumbers
to dressify_api@127.0.0.1;

-- Admin
create user dressify_admin@127.0.0.1 identified by '12345678';
grant all on dbproject.* 
to dressify_admin@127.0.0.1;