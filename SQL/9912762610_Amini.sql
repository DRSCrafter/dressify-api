use dbproject;

insert into colors values 
	(default, "red"),
    (default, "blue"),
    (default, "green"),
    (default, "yellow"),
    (default, "orange"),
    (default, "black"),
    (default, "purple"),
    (default, "white");
    
insert into productcategory values
	(default, "pants"),
    (default, "shirt"),
    (default, "jacket"),
    (default, "jeans"),
    (default, "hat");
    
insert into provider values (default, "Puma");
insert into provideraddresses values ("PUMA SE PUMA WAY 1 91074 Herzogenaurach, GERMANY", 1);

insert into provider values (default, "Reebook");
insert into provideraddresses values ("25 Drydock Ave, Boston, MA 02210,", 2);


insert into provider values (default, "Lulus");
insert into provideraddresses values ("Chico, California, US", 3);

insert into provider values (defalt, "هاکوپیان");
insert into provideraddresses values ("تهران، خیابان پاسداران، خیبان بوستان پنجم", 4); 
insert into provideraddresses values ("تهران، خیابان مطهری، خیابان فجر", 4);

insert into provider values (defalt, "تندرست");
insert into provideraddresses values ("مشهذ، خیابان راهنمای 3", 5); 
insert into provideraddresses values ("تهران، خیابان اندرزگو،", 5);

insert into provider values (defalt, "چرم مشهد");
insert into provideraddresses values ("مشهد، احمدآباد، نبش رضا، جنب بانک رفاه", 6); 
insert into provideraddresses values ("مشهد، بلوار سجاد، چهارراه بزرگمهر، جنب پاساژ پردیس", 6);
insert into provideraddresses values ("مشهد، بلوار وکیل آباد، برج آرمیتاژ گلشن", 6);

    
insert into product values(default, "pant#1", 0, "M", "Polyester", 15, 1);
insert into productcolors values(1, 1);
insert into pricehistory values(default, 150, "1401-7-23", 1);
insert into provider_has_product values(1, 1);

insert into customer values (default, "Mohammad", "MohammadZadeh", default);
insert into customeraddress values ("C1", "S1", 1);
insert into customeraddress values ("C1", "S2", 1);
insert into customerphonenumbers values("09352884424", 1);

insert into cart values(default, 0, 1);
insert into dbproject.order values(default, 3, 1, 1, 450, 1);
insert into comment values(default, 1, 1, 4.5,
 "Product as expected including pant color, and delivered on time. Would order again.");
insert into discountcode values(default, 1, 20, 1);

insert into payment values(default, 360, "1401-7-25", 1);
insert into shipment values(default, "1401-7-28", 1);