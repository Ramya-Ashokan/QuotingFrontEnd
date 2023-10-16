export class Product{
    
    constructor(
        public pid:string,
        public pname:string,
        public pdesc:string,
        public price:number,
        public term:number,
        public ptype:string,
        public location:string)
    {}


    
}

export class Products{
    constructor(
        public productName:string,
        public productType:string,
        public customerType:String,
        public features:Feature[],
        public validity:string,
        public price:number,
        public subscriptions:Subscription[],
        public locations:Location[]
    ){}

}
export interface Feature {
    name: string;
    isChecked: boolean;
  }
  export class Subscription{
    constructor(
        public subscriptionId:Number,
        public subscriptionName:string
    ){}
  }

  export class Location{
    constructor(
        public locationId:Number,
        public locationName:string
    ){}
  }