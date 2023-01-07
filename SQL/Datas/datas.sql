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
insert into provideraddresses values ("GERMANY", "Herzogenaurach", "PUMA SE PUMA WAY 1 91074", 1);

insert into provider values (default, "Reebok");
insert into provideraddresses values ("United States", "Boston", "25 Drydock Ave", 2);

insert into provider values (default, "Lulus");
insert into provideraddresses values ("United States", "California", "Chico", 3);

insert into provider values (default, "هاکوپیان");
insert into provideraddresses values ("ایران","تهران","خیابان پاسداران، خیبان بوستا", 4); 
insert into provideraddresses values ("ایران", "تهران", "خیابان مطهری، خیابان فجر", 4);

insert into provider values (default, "تندرست");
insert into provideraddresses values ("ایران", "مشهد", "۳ خیابان راهنمای", 5); 
insert into provideraddresses values ("ایران", "تهران", "خیابان اندرزگو", 5);

insert into provider values (default, "چرم مشهد");
insert into provideraddresses values ("ایران", "مشهد", "احمدآباد، نبش رضا، جنب بانک رفاه", 6); 
insert into provideraddresses values ("ایران", "مشهد", "بلوار سجاد، چهارراه بزرگمهر، جنب پاساژ پردیس", 6);
insert into provideraddresses values ("ایران", "مشهد", "بلوار وکیل آباد، برج آرمیتاژ گلشن", 6);
   
-- product 1
insert into product values(default, "شلوار جین آبی", 0, "M", "Polyester", 15, 1);
insert into productcolors values(1, 1);
insert into pricehistory values(default, 1500000, "1401-7-23", 1);
insert into provider_has_product values(1, 1);
insert into discountCode values(default,0.7,1);

-- product 2
insert into product values(default, "سویشرت زنانه دورس جلو بسته شتری کیدی", 1, "L", "Cotton", 8, 3);
insert into productcolors values(2, 4);
insert into pricehistory values(default, 7700000,"2023-01-05", 2);
insert into provider_has_product values(4,2);
insert into discountCode values(default,0.3,2);
insert into discountCode values(default,0.65,2);

-- product 3
insert into product values(default, "تی شرت زنانه ورزشی یقه گرد", 0,"L",'Wool', 5, 3);
insert into productcolors values(3, 4);
insert into pricehistory values(default, 5600000,"2023-01-05", 3);
insert into provider_has_product values(2,3);

-- product 4
insert into product values(default, "شلوار کردی مخصوص عروسی", 1,"XXXL", 'Leather', 10, 4);
insert into productcolors values(4, 2);
insert into productcolors values(4, 5);
insert into productcolors values(4, 6);
insert into productcolors values(4, 7);
insert into pricehistory values(default, 3100000,"2023-01-05", 3);
insert into provider_has_product values(6,4);
insert into discountCode values(default,0.2,4);

-- product 5
insert into product values(default, "کلاه گرم پشمی",1,"L","Cotton", 9, 3);
insert into productcolors values(5, 5);
insert into pricehistory values(default, 1500000,"2023-01-05", 5);
insert into provider_has_product values(4,5);
insert into discountCode values(default,0.04,5);

-- product 6
insert into product values(default, "شلوار بگ جین",1,"L",'Leather', 4, 4);
insert into productcolors values(6, 2);
insert into productcolors values(6, 6);
insert into productcolors values(6, 8);
insert into pricehistory values(default, 1500000,"2023-01-05", 6);
insert into provider_has_product values(5,6);
insert into discountCode values(default,0.02,6);

-- product 7
insert into product values(default, "بافت یقه هفت آستین بلند",1, "XL", 'Silk', 7, 3);
insert into productcolors values(7, 5);
insert into pricehistory values(default, 780000,"2023-01-05", 7);
insert into provider_has_product values(2,7);

-- user 1
insert into user values (default, "امیر محمد", "محمدزاده", 0, "amirMohammad.mohammadzadeh@gmail.com", "1234", "2022-11-6");
insert into useraddress values ("شیراز", "پاسداران", 1);
insert into useraddress values ("شیراز", "ستارخان", 1);
insert into userphonenumbers values("09352884424", 1);


insert into cart values(default, 0, 1);
insert into cart values(default, 0, 1);
insert into cart values(default, 0, 1);

insert into comment values(default,  1, 4.5,
 "Product as expected including pant color, and delivered on time. Would order again.", 1);


insert into payment values(4500000, "2023-1-7", 1);
insert into payment values(360, "2023-1-5", 2);
insert into payment values(360, "2023-1-1", 3);

insert into shipment values(default, "2023-1-5", 1);

insert into dbproject.order values(default, 3, 1, 1, 450, 1, null);
insert into dbproject.order values(default, 2, 1, 1, 320, 1, null);
insert into dbproject.order values(default, 1, 2, 2, 740, 1, null);
insert into dbproject.order values(default, 7, 2, 3, 1000, 1, null);
insert into dbproject.order values(default, 2, 2, 4, 500, 1, null);
insert into dbproject.order values(default, 4, 1, 4, 832, 1, null);
insert into dbproject.order values(default, 2, 2, 7, 500, 1, null);
insert into dbproject.order values(default, 3, 1, 7, 500, 1, null);
insert into dbproject.order values(default, 1, 1, 2, 500, 1, null);
insert into dbproject.order values(default, 2, 1, 2, 500, 1, null);
insert into dbproject.order values(default, 12, 3, 6, 500, 1, null);
insert into dbproject.order values(default, 23, 3, 6, 500, 1, null);
insert into dbproject.order values(default, 5, 3, 6, 500, 1, null);

-- user 2
insert into user values (default, "معصومه", "کشاورز", 0, "masoume.keshavarz@gmail.com", "masoume234*", "2022-11-26");
insert into useraddress values ("مشهد", "احمدآباد", 2);
insert into useraddress values ("مشهد", "وکیل آباد", 2);
insert into userphonenumbers values("09035129832", 2);
insert into cart values(default, 0, 2);
insert into dbproject.order values(default, 2, 2, 3, 11200000, 2, null);
insert into payment values( 11200000, "2023-1-5", 4);

insert into comment values(default,  1, 3.5, "شلوار کمی تنگ بود", 2);
insert into cart values(default, 0, 2);
insert into dbproject.order values(default, 5, 3, 6, 7500000, 2, null);
insert into payment values( 7500000, "2023-1-1", 5);

-- user 3
insert into user values (default, "سینا", "زارعی", 0, "sina34z@gmail.com", "qweert34!#", "2022-12-06");
insert into useraddress values ("تهران", "انقلاب", 3);
insert into userphonenumbers values("09158730187",3);

-- user 4
insert into user values (default, "گلی", "شفیعی", 0, "goligoli1376@gmail.com", "zxjsjdfAA12", "2022-10-12");
insert into useraddress values ("اضفهان", "عباس آباد",4);
insert into useraddress values ("اضفهان", "هشت بهشت",4);
insert into userphonenumbers values("09151073287",4);
insert into dbproject.order values(default, 2, 2, 2, 15400000, 4, 1);

-- user 5
insert into user values (default, "علی", "ظهوریان", 0, "ali2128@gmail.com", "324324Ak", "2022-12-23");
insert into useraddress values ("مشهد", "سحاد",5);
insert into userphonenumbers values("09127629843",5);

-- user 6
insert into user values (default, "سحر", "حسینی", 0, "saharHosseini@gmail.com", "reZZZZaYu", "2022-12-12");
insert into useraddress values ("تهران", "صادقیه",6);
insert into useraddress values ("تهران", "محمدیه",6);
insert into userphonenumbers values("09127629843",6);

-- user 7
insert into user values (default, "غلام", "امینی", 0, "gholam432gmail.com", "qwertGHolam222", "2022-12-09");
insert into useraddress values ("ِیزد", "امام علی",7);
insert into userphonenumbers values("09037184378",7);

-- user 8
insert into user values (default, "مژده", "صادقی", 0, "Mozhde_Sadeghi@gmail.com", "mozhi34322__3", "2022-11-6");
insert into useraddress values ("مشهد", "دانشجو", 8);
insert into userphonenumbers values("09128732984",8);

-- user 9
insert into user values (default, "شهریار", "زارع پور", 0, "shahriyaaaar1379@gmail.com", "92672187423AAA", "2022-09-6");
insert into useraddress values ("تهران", "فرشته", 9);
insert into userphonenumbers values("09036719810",9);

-- user 10
insert into user values (default, "سارا", "نقی زاده", 0, "SaraNaghizade12@gmail.com", "98sara13808080", "2022-12-28");
insert into useraddress values ("مشهد", "فلسطین", 10);
insert into userphonenumbers values("09035187610",10);
	
-- user 11
insert into user values (default, "آرزو", "محمدی", 0, "Arezooooo_m75@gmail.com", "a1298***6", "2022-11-09");
insert into useraddress values ("مشهد", "مجیدیه", 11);
insert into userphonenumbers values("09051209821",11);