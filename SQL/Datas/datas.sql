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
    
----------------------------------------------------------

insert into productcategory values
  (default, "pants"),
    (default, "shirt"),
    (default, "jacket"),
    (default, "jeans"),
    (default, "hat");
    
----------------------------------------------------------

insert into provider values (default, "Puma");
insert into provideraddresses values ("America","Alaska", "street1",1);

insert into provider values (default, "Reebook");
insert into provideraddresses values ("25 Drydock Ave", "Boston", "MA 02210", 2);

insert into provider values (default, "Lulus");
insert into provideraddresses values ("US", "California", "street M3", 3);

insert into provider values (default, "هاکوپیان");
insert into provideraddresses values ("Iran","Tehran","Pasdaran St", 4); 
insert into provideraddresses values ("Iran","Tehran","Mothari St", 4);

insert into provider values (default, "تندرست");
insert into provideraddresses values ("Iran","Mashhad","Rahanamaei St", 5); 
insert into provideraddresses values ("Iran","Mashhad","Andarzgoo St", 5);

insert into provider values (default, "چرم مشهد");
insert into provideraddresses values ("Iran","Mashhad","Ahmad Abad St", 6); 
insert into provideraddresses values ("Iran","Mashhad","Vakil Abad St", 6);
insert into provideraddresses values ("Iran","Mashhad","Sajjad Blv", 6);

----------------------------------------------------------

insert into product values(default, "شلوار جین آبی", 0, "M", "Polyester", 15, 1);
insert into productcolors values(1, 1);
insert into provider_has_product values(1, 1);
insert into pricehistory values(default,1500000, "2023-01-01", 1,1);

insert into product values(default, "سویشرت زنانه دورس جلو بسته شتری کیدی", 1, "L", "Cotton", 8, 3);
insert into productcolors values(2, 4);
insert into provider_has_product values(4,2);
insert into pricehistory values(default, 7700000,"2023-01-05", 2,2);

insert into product values(default, "تی شرت زنانه ورزشی یقه گرد", 0,"L",'Wool', 5, 3);
insert into productcolors values(3, 4);
insert into provider_has_product values(2,3);
insert into pricehistory values(default, 5600000,"2023-01-05", 3,3);

insert into product values(default, "شلوار کردی مخصوص عروسی", 1,"XXXL", 'Leather', 10, 4);
insert into productcolors values(4, 2);
insert into productcolors values(4, 5);
insert into productcolors values(4, 6);
insert into productcolors values(4, 7);
insert into provider_has_product values(6,4);
insert into pricehistory values(default, 3100000,"2023-01-05", 4,4);
insert into provider_has_product values(3,4);
insert into pricehistory values(default, 2980000,"2023-01-05", 4,5);

insert into product values(default, "کلاه گرم پشمی",1,"L","Cotton", 9, 3);
insert into productcolors values(5, 5);
insert into provider_has_product values(4,5);
insert into pricehistory values(default, 1500000,"2023-01-05", 5,6);

insert into product values(default, "شلوار بگ جین",1,"L",'Leather', 4, 4);
insert into productcolors values(6, 2);
insert into productcolors values(6, 6);
insert into productcolors values(6, 8);
insert into provider_has_product values(5,6);
insert into pricehistory values(default, 1500000,"2023-01-05", 6,5);
insert into provider_has_product values(2,6);
insert into pricehistory values(default, 1600000,"2023-01-05", 6,3);
insert into provider_has_product values(3,6);
insert into pricehistory values(default, 1750000,"2023-01-05", 6,4);

insert into product values(default, "بافت یقه هفت آستین بلند",1,"XL", 'Silk', 7, 3);
insert into productcolors values(7, 5);
insert into provider_has_product values(2,7);
insert into pricehistory values(default, 780000,"2023-01-05", 7,3);
insert into provider_has_product values(3,7);
insert into pricehistory values(default, 750000,"2023-01-05", 7,4);
insert into provider_has_product values(1,7);
insert into pricehistory values(default, 680000,"2023-01-05", 7,5);

---------------------------------
insert into user values (default, "امیر محمد", "محمدزاده", 0, "amirMohammad.mohammadzadeh@gmail.com", "1234", curdate());
insert into useraddress values ("Shiraz", "Pasdaran", 1);
insert into useraddress values ("َShiraz", "Sattarkhan", 1);
insert into userphonenumbers values("09352884424", 1);

insert into user values (default, "معصومه", "کشاورز", 0, "masoume.keshavarz@gmail.com", "masoume234*", curdate());
insert into useraddress values ("Mashhad", "Ahamd Abad", 2);
insert into useraddress values ("Mashhad", "Vakil Abad", 2);
insert into userphonenumbers values("09035129832", 2);

insert into user values (default, "سینا", "زارعی", 0, "sina34z@gmail.com", "qweert34!#", curdate());
insert into useraddress values ("Tehran", "Enghelab", 3);
insert into userphonenumbers values("09158730187",3);

insert into user values (default, "گلی", "شفیعی", 0, "goligoli1376@gmail.com", "zxjsjdfAA12", curdate());
insert into useraddress values ("Isfahan", "Abbas Abad",4);
insert into useraddress values ("Isfahan", "Hasht Behesht",4);
insert into userphonenumbers values("09151073287",4);

insert into user values (default, "علی", "ظهوریان", 0, "ali2128@gmail.com", "324324Ak", curdate());
insert into useraddress values ("Mashhad", "Sajjad Blv",5);
insert into userphonenumbers values("09127629843",5);

insert into user values (default, "سحر", "حسینی", 0, "saharHosseini@gmail.com", "reZZZZaYu", curdate());
insert into useraddress values ("Tehran", "Sadeghie",6);
insert into useraddress values ("Tehran", "Mohammadie",6);
insert into userphonenumbers values("09127629843",6);

insert into user values (default, "غلام", "امینی", 0, "gholam432gmail.com", "qwertGHolam222", curdate());
insert into useraddress values ("Yazd", "Imam Ali St",7);
insert into userphonenumbers values("09037184378",7);

insert into user values (default, "مژده", "صادقی", 0, "Mozhde_Sadeghi@gmail.com", "mozhi34322__3", curdate());
insert into useraddress values ("Mashhad", "دانشجو", 8);
insert into userphonenumbers values("09128732984",8);

insert into user values (default, "شهریار", "زارع پور", 0, "shahriyaaaar1379@gmail.com", "92672187423AAA", curdate());
insert into useraddress values ("Tehran", "Fereshteh", 9);
insert into userphonenumbers values("09036719810",9);

insert into user values (default, "سارا", "نقی زاده", 0, "SaraNaghizade12@gmail.com", "98sara13808080", curdate());
insert into useraddress values ("Mashhad", "Palestine", 10);
insert into userphonenumbers values("09035187610",10);

insert into user values (default, "آرزو", "محمدی", 0, "Arezooooo_m75@gmail.com", "a1298***6", curdate());
insert into useraddress values ("Mashhad", "Majidieh St", 11);
insert into userphonenumbers values("09051209821",11);

--------------------------------------------------

insert into discountCode values(default,0.65,2);
insert into discountCode values(default,0.3,2);
insert into discountCode values(default,0.7,1);
insert into discountCode values(default,0.2,4);
insert into discountCode values(default,0.04,5);
insert into discountCode values(default,0.02,6);

--------------------------------------------------

insert into cart values(default, 1, 1);
insert into dbproject.order values(default, 3, 1, 1,9300000.0, 1, null);
insert into comment values(default,  1, 4.5,"Product as expected including pant color, and delivered on time. Would order again.", 1);
insert into payment values(default,9300000.0, "2023-01-07", 1);
insert into shipment values(default, "2023-01-07", 1);

insert into cart values(default, 1, 2);
insert into dbproject.order values(default, 2, 2, 1,6100000, 2, null);
insert into payment values(default,6100000.0, "2023-01-09", 2);
insert into shipment values(default, "2023-01-09", 2);

insert into cart values(default,1, 3);
insert into dbproject.order values(default,2, 3, 3, 1680000, 3, null);
insert into payment values(default,1680000.0, "2023-01-8", 3);
insert into shipment values(default, "2023-01-8", 3);