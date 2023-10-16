export class Customer{
constructor(
    public userName:string,
    public email:string,
    public password:string,
    public dob:Date,
    public address:string,
    // public city:string,
    // public state:string,
    // public country:string,
    // public pincode:string,
    public inputStates:any[],
    public inputDistrict:any[],
    public phoneno:string,
    public gender:string)
{}



}