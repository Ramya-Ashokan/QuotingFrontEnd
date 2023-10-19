//import { Subscription } from "rxjs";
import { Product,Subscription,Location } from "./Product";


    export let pList:Product[]=[
        new Product('1','399 plan','unlimited voice calls,900 SMS,1.5gb/day',399,1,'wireless','Chennai'),
        new Product('2','599 plan','unlimited voice calls,900 SMS,2gb/day free wynk caller tunes',599,1,'wireless','Chennai'),
        new Product('3','808 plan','unlimited voice calls,900 SMS,2gb/day free wynk caller tunes,hotstar subscription',809,1,'wireless','Chennai'),
        new Product('4','399 plan','unlimited voice calls,900 SMS,1.5gb/day',399,1,'wireless','Hyderabad'),
        new Product('5','599 plan','unlimited voice calls,900 SMS,1.5gb/day',399,1,'wireless','Hyderabad'),
        new Product('6','599 plan','unlimited voice calls,900 SMS,2gb/day free wynk caller tunes',599,1,'wireless','Bangalore'),
        new Product('7','808 plan','unlimited voice calls,900 SMS,2gb/day free wynk caller tunes,hotstar subscription',809,1,'wireless','Bangalore'),
   
    ];
    export let ptypes:String[]=['All','Wired','Wireless'];
    export let locations:String[]=['All','Chennai','Bangalore','Hyderabad'];
    export let terms:number[]=[1,3,6,12];
    
    export let productTypes:String[]=['All','wired','wireless'];
    export let customerTypes:String[]=['Customer','Enterprise','SmallScale'];
    export let subscriptions: Subscription[] = [
        new Subscription(1,"Netflix"),
        new Subscription(2,'Hotstar'),
        new Subscription(3,'Amazon Prime'),
        new Subscription(4,'Jio Cinema')
      ];
      export let states: Location[] = [
        new Location(1,'Andhra Pradesh'),
        new Location(2,'Arunachal Pradesh'),
        new Location(3,'Assam'),
        new Location(4,'Bihar'),
        new Location(5,'Chhattisgarh'),
        new Location(6,'Goa'),
        new Location(7,'Gujarat'),
        new Location(8,'Haryana'),
        new Location(9,'Himachal Pradesh'),
        new Location(10,'Jharkhand'),
        new Location(11,'Karnataka'),
        new Location(12,'Kerala'),
        new Location(13,'Madhya Pradesh'),
        new Location(14,'Maharashtra'),
        new Location(15,'Manipur'),
        new Location(16,'Meghalaya'),
        new Location(17,'Mizoram'),
        new Location(18,'Nagaland'),
        new Location(19,'Odisha'),
        new Location(20,'Punjab'),
        new Location(21,'Rajasthan'),
        new Location(22,'Sikkim'),
        new Location(23,'Tamil Nadu'),
        new Location(24,'Telangana'),
        new Location(25,'Tripura'),
        new Location(26,'Uttar Pradesh'),
        new Location(27,'Uttarakhand'),
        new Location(28,'West Bengal'),
      ];