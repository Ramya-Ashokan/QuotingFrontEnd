export class Quote{
    constructor(
        public userEmail:any,
        public productId:any,
        public productName:any,
        public productType:any,
        public customerType:any,
        public features:any[],
        public validity:any,
        public price:any,
        public subscriptions:string[],
        public locations:string[],
        public quantity:any,
        public subTotal:any
        )
    {
     
    }
}