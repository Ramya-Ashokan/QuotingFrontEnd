import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../modules/Customer';
import { RegisterServiceService } from '../Services/Registerservice.service';
// import { states } from '../modules/CustomerList';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup | any;
  //customer:Customer;
//dob1:any;
userName:FormControl;
email:FormControl; 
password:FormControl;
dob:FormControl;
address:FormControl;
// city:FormControl;
// state:FormControl;
// country:FormControl;
// pincode:FormControl;
phoneno:FormControl;
gender:FormControl;
inputStates:FormControl;
inputDistrict:FormControl;
  errorMessage: any;
  cList:any;
message:any;
  //router: any;
/*sample state */
// public inputStates: string = 'inputStates';  

  public districts: string[] = [];

  public stateDistricts: { [key: string]: string[] } = {

    'Andhra Pradesh': [

      'Anantapur',

      'Chittoor',

      'East Godavari',

      'Guntur',

      'Kadapa',

      'Krishna',

      'Kurnool',

      'Prakasam',

      'Nellore',

      'Srikakulam',

      'Visakhapatnam',

      'Vizianagaram',

      'West Godavari'

    ],

    'Arunachal Pradesh': [

      'Anjaw',

      'Changlang',

      'Dibang Valley',

      'East Kameng',

      'East Siang',

      'Kra Daadi',

      'Kurung Kumey',

      'Lohit',

      'Longding',

      'Lower Dibang Valley',

      'Lower Subansiri',

      'Namsai',

      'Papum Pare',

      'Siang',

      'Tawang',

      'Tirap',

      'Upper Siang',

      'Upper Subansiri',

      'West Kameng',

      'West Siang',

      'Itanagar'

    ],

    'Assam': [

      'Baksa',

      'Barpeta',

      'Biswanath',

      'Bongaigaon',

      'Cachar',

      'Charaideo',

      'Chirang',

      'Darrang',

      'Dhemaji',

      'Dhubri',

      'Dibrugarh',

      'Goalpara',

      'Golaghat',

      'Hailakandi',

      'Hojai',

      'Jorhat',

      'Kamrup Metropolitan',

      'Kamrup (Rural)',

      'Karbi Anglong',

      'Karimganj',

      'Kokrajhar',

      'Lakhimpur',

      'Majuli',

      'Morigaon',

      'Nagaon',

      'Nalbari',

      'Dima Hasao',

      'Sivasagar',

      'Sonitpur',

      'South Salmara Mankachar',

      'Tinsukia',

      'Udalguri',

      'West Karbi Anglong'

    ],

    'Bihar': [

      'Araria',

      'Arwal',

      'Aurangabad',

      'Banka',

      'Begusarai',

      'Bhagalpur',

      'Bhojpur',

      'Buxar',

      'Darbhanga',

      'East Champaran',

      'Gaya',

      'Gopalganj',

      'Jamui',

      'Jehanabad',

      'Kaimur',

      'Katihar',

      'Khagaria',

      'Kishanganj',

      'Lakhisarai',

      'Madhepura',

      'Madhubani',

      'Munger',

      'Muzaffarpur',

      'Nalanda',

      'Nawada',

      'Patna',

      'Purnia',

      'Rohtas',

      'Saharsa',

      'Samastipur',

      'Saran',

      'Sheikhpura',

      'Sheohar',

      'Sitamarhi',

      'Siwan',

      'Supaul',

      'Vaishali',

      'West Champaran'

    ],

    'Chhattisgarh': [

      'Balod',

      'Baloda Bazar',

      'Balrampur',

      'Bastar',

      'Bemetara',

      'Bijapur',

      'Bilaspur',

      'Dantewada',

      'Dhamtari',

      'Durg',

      'Gariaband',

      'Janjgir Champa',

      'Jashpur',

      'Kabirdham',

      'Kanker',

      'Kondagaon',

      'Korba',

      'Koriya',

      'Mahasamund',

      'Mungeli',

      'Narayanpur',

      'Raigarh',

      'Raipur',

      'Rajnandgaon',

      'Sukma',

      'Surajpur',

      'Surguja'

    ],

    'Goa': ['North Goa', 'South Goa'],

    'Gujarat': [

      'Ahmedabad',

      'Amreli',

      'Anand',

      'Aravalli',

      'Banaskantha',

      'Bharuch',

      'Bhavnagar',

      'Botad',

      'Chhota Udaipur',

      'Dahod',

      'Dang',

      'Devbhoomi Dwarka',

      'Gandhinagar',

      'Gir Somnath',

      'Jamnagar',

      'Junagadh',

      'Kheda',

      'Kutch',

      'Mahisagar',

      'Mehsana',

      'Morbi',

      'Narmada',

      'Navsari',

      'Panchmahal',

      'Patan',

      'Porbandar',

      'Rajkot',

      'Sabarkantha',

      'Surat',

      'Surendranagar',

      'Tapi',

      'Vadodara',

      'Valsad'

    ],

    'Haryana': [

      'Ambala',

      'Bhiwani',

      'Charkhi Dadri',

      'Faridabad',

      'Fatehabad',

      'Gurugram',

      'Hisar',

      'Jhajjar',

      'Jind',

      'Kaithal',

      'Karnal',

      'Kurukshetra',

      'Mahendragarh',

      'Mewat',

      'Palwal',

      'Panchkula',

      'Panipat',

      'Rewari',

      'Rohtak',

      'Sirsa',

      'Sonipat',

      'Yamunanagar'

    ],

    'Himachal Pradesh': [

      'Bilaspur',

      'Chamba',

      'Hamirpur',

      'Kangra',

      'Kinnaur',

      'Kullu',

      'Lahaul Spiti',

      'Mandi',

      'Shimla',

      'Sirmaur',

      'Solan',

      'Una'

    ],

    'Jammu and Kashmir': [

      'Anantnag',

      'Bandipora',

      'Baramulla',

      'Budgam',

      'Doda',

      'Ganderbal',

      'Jammu',

      'Kargil',

      'Kathua',

      'Kishtwar',

      'Kulgam',

      'Kupwara',

      'Leh',

      'Poonch',

      'Pulwama',

      'Rajouri',

      'Ramban',

      'Reasi',

      'Samba',

      'Shopian',

      'Srinagar',

      'Udhampur'

    ],

    'Jharkhand': [

      'Bokaro',

      'Chatra',

      'Deoghar',

      'Dhanbad',

      'Dumka',

      'East Singhbhum',

      'Garhwa',

      'Giridih',

      'Godda',

      'Gumla',

      'Hazaribagh',

      'Jamtara',

      'Khunti',

      'Koderma',

      'Latehar',

      'Lohardaga',

      'Pakur',

      'Palamu',

      'Ramgarh',

      'Ranchi',

      'Sahebganj',

      'Seraikela Kharsawan',

      'Simdega',

      'West Singhbhum'

    ],

    'Karnataka': [

      'Bagalkot',

      'Bangalore Rural',

      'Bangalore Urban',

      'Belgaum',

      'Bellary',

      'Bidar',

      'Vijayapura',

      'Chamarajanagar',

      'Chikkaballapur',

      'Chikkamagaluru',

      'Chitradurga',

      'Dakshina Kannada',

      'Davanagere',

      'Dharwad',

      'Gadag',

      'Gulbarga',

      'Hassan',

      'Haveri',

      'Kodagu',

      'Kolar',

      'Koppal',

      'Mandya',

      'Mysore',

      'Raichur',

      'Ramanagara',

      'Shimoga',

      'Tumkur',

      'Udupi',

      'Uttara Kannada',

      'Yadgir'

    ],

    'Kerala': [

      'Alappuzha',

      'Ernakulam',

      'Idukki',

      'Kannur',

      'Kasaragod',

      'Kollam',

      'Kottayam',

      'Kozhikode',

      'Malappuram',

      'Palakkad',

      'Pathanamthitta',

      'Thiruvananthapuram',

      'Thrissur',

      'Wayanad'

    ],

    'Madhya Pradesh': [

      'Agar Malwa',

      'Alirajpur',

      'Anuppur',

      'Ashoknagar',

      'Balaghat',

      'Barwani',

      'Betul',

      'Bhind',

      'Bhopal',

      'Burhanpur',

      'Chhatarpur',

      'Chhindwara',

      'Damoh',

      'Datia',

      'Dewas',

      'Dhar',

      'Dindori',

      'Guna',

      'Gwalior',

      'Harda',

      'Hoshangabad',

      'Indore',

      'Jabalpur',

      'Jhabua',

      'Katni',

      'Khandwa',

      'Khargone',

      'Mandla',

      'Mandsaur',

      'Morena',

      'Narsinghpur',

      'Neemuch',

      'Panna',

      'Raisen',

      'Rajgarh',

      'Ratlam',

      'Rewa',

      'Sagar',

      'Satna',

      'Sehore',

      'Seoni',

      'Shahdol',

      'Shajapur',

      'Sheopur',

      'Shivpuri',

      'Sidhi',

      'Singrauli',

      'Tikamgarh',

      'Ujjain',

      'Umaria',

      'Vidisha'

    ],

    'Maharashtra': [

      'Ahmednagar',

      'Akola',

      'Amravati',

      'Aurangabad',

      'Beed',

      'Bhandara',

      'Buldhana',

      'Chandrapur',

      'Dhule',

      'Gadchiroli',

      'Gondia',

      'Hingoli',

      'Jalgaon',

      'Jalna',

      'Kolhapur',

      'Latur',

      'Mumbai City',

      'Mumbai Suburban',

      'Nagpur',

      'Nanded',

      'Nandurbar',

      'Nashik',

      'Osmanabad',

      'Palghar',

      'Parbhani',

      'Pune',

      'Raigad',

      'Ratnagiri',

      'Sangli',

      'Satara',

      'Sindhudurg',

      'Solapur',

      'Thane',

      'Wardha',

      'Washim',

      'Yavatmal'

    ],

    'Manipur': [

      'Bishnupur',

      'Chandel',

      'Churachandpur',

      'Imphal East',

      'Imphal West',

      'Jiribam',

      'Kakching',

      'Kamjong',

      'Kangpokpi',

      'Noney',

      'Pherzawl',

      'Senapati',

      'Tamenglong',

      'Tengnoupal',

      'Thoubal',

      'Ukhrul'

    ],

    'Meghalaya': [

      'East Garo Hills',

      'East Jaintia Hills',

      'East Khasi Hills',

      'North Garo Hills',

      'Ri Bhoi',

      'South Garo Hills',

      'South West Garo Hills',

      'South West Khasi Hills',

      'West Garo Hills',

      'West Jaintia Hills',

      'West Khasi Hills'

    ],

    'Mizoram': [

      'Aizawl',

      'Champhai',

      'Kolasib',

      'Lawngtlai',

      'Lunglei',

      'Mamit',

      'Saiha',

      'Serchhip',

      'Aizawl',

      'Champhai',

      'Kolasib',

      'Lawngtlai',

      'Lunglei',

      'Mamit',

      'Saiha',

      'Serchhip'

    ],

    'Nagaland': [

      'Dimapur',

      'Kiphire',

      'Kohima',

      'Longleng',

      'Mokokchung',

      'Mon',

      'Peren',

      'Phek',

      'Tuensang',

      'Wokha',

      'Zunheboto'

    ],

    'Odisha': [

      'Angul',

      'Balangir',

      'Balasore',

      'Bargarh',

      'Bhadrak',

      'Boudh',

      'Cuttack',

      'Deogarh',

      'Dhenkanal',

      'Gajapati',

      'Ganjam',

      'Jagatsinghpur',

      'Jajpur',

      'Jharsuguda',

      'Kalahandi',

      'Kandhamal',

      'Kendrapara',

      'Kendujhar',

      'Khurda',

      'Koraput',

      'Malkangiri',

      'Mayurbhanj',

      'Nabarangpur',

      'Nayagarh',

      'Nuapada',

      'Puri',

      'Rayagada',

      'Sambalpur',

      'Subarnapur',

      'Sundargarh'

    ],

    'Punjab': [

      'Amritsar',

      'Barnala',

      'Bathinda',

      'Faridkot',

      'Fatehgarh Sahib',

      'Fazilka',

      'Ferozepur',

      'Gurdaspur',

      'Hoshiarpur',

      'Jalandhar',

      'Kapurthala',

      'Ludhiana',

      'Mansa',

      'Moga',

      'Muktsar',

      'Nawanshahr',

      'Patiala',

      'Rupnagar',

      'Sangrur',

      'S.A.S Nagar',

      'Tarn Taran'

    ],

    'Rajasthan': [

      'Ajmer',

      'Alwar',

      'Banswara',

      'Baran',

      'Barmer',

      'Bharatpur',

      'Bhilwara',

      'Bikaner',

      'Bundi',

      'Chittorgarh',

      'Churu',

      'Dausa',

      'Dholpur',

      'Dungarpur',

      'Hanumangarh',

      'Jaipur',

      'Jaisalmer',

      'Jalore',

      'Jhalawar',

      'Jhunjhunu',

      'Jodhpur',

      'Karauli',

      'Kota',

      'Nagaur',

      'Pali',

      'Pratapgarh',

      'Rajsamand',

      'Sawai Madhopur',

      'Sikar',

      'Sirohi',

      'Sri Ganganagar',

      'Tonk',

      'Udaipur'

    ],

    'Sikkim': ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'],

    'Tamil Nadu': [

      'Ariyalur',

      'Chengalpattu',

      'Chennai',

      'Coimbatore',

      'Cuddalore',

      'Dharmapuri',

      'Dindigul',

      'Erode',

      'Kallakurichi',

      'Kanchipuram',

      'Kanyakumari',

      'Karur',

      'Krishnagiri',

      'Madurai',

      'Mayiladuthurai',

      'Nagapattinam',

      'Namakkal',

      'Perambalur',

      'Pudukkottai',

      'Ramanathapuram',

      'Ranipet',

      'Salem',

      'Sivaganga',

      'Tenkasi',

      'Thanjavur',

      'Theni',

      'Thoothukudi',

      'Tiruchirappalli',

      'Tirunelveli',

      'Tirupathur',

      'Tiruppur',

      'Tiruvallur',

      'Tiruvannamalai',

      'Vellore',

      'Viluppuram',

      'Virudhunagar'

    ],

    'Telangana': [

      'Adilabad',

      'Bhadradri Kothagudem',

      'Hyderabad',

      'Jagtial',

      'Jangaon',

      'Jayashankar Bhupalpally']

    }

 

 




  constructor(private rService:RegisterServiceService,private router:Router) { 
//this.customer=new Customer('','','','','','','','','','','');
    this.userName=new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z\s.]{2,}$/)]);
    this.email=new FormControl('',[Validators.required,Validators.pattern(/^[a-z]([A-Za-z0-9_.])+@[a-z]+\.(com|in|org)$/)]);
    this.password=new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)]);
  
    this.dob=new FormControl('',[Validators.required]);
  this.address=new FormControl('',[Validators.required]);
  // this.city=new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s.]{2,}$/)]);
  // this.state=new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s.]{2,}$/)]);
  
  this.inputStates=new FormControl('',[Validators.required]);
  this.inputDistrict=new FormControl('',[Validators.required],);
  
  // this.country=new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s.]{2,}$/)]);
//  this.pincode=new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{5,6}(?:-[0-9]{4})?$/)]);
//  this.pincode=new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{6}$/)]);
 
 this.phoneno=new FormControl('',[Validators.required,Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]);
 this.gender=new FormControl('',[Validators.required]);

    this.registrationForm=new FormGroup(
     
    {
    userName:this.userName,
    email:this.email,
    password:this.password,
    dob:this.dob,
    address:this.address,
    // city:this.city,
    // state:this.state,
    
    inputStates:this.inputStates,
    inputDistrict:this.inputDistrict,
    
    // country:this.country,
    // pincode:this.pincode,
    phoneno:this.phoneno,
    gender:this.gender,
 
  }
 );

  }
  getstate:any

  onDistrictChange()
  {
   return this.inputDistrict.value;
    // this.districts = dis;
    console.log(this.inputDistrict.value);
  }

  onStateChange(){
    this.getstate = this.registrationForm.get('inputStates').value;
 //selectedState=this.registrationForm.get('inputStates')?.value;

    // this.getstate=document.getElementById("stateselect");

    // console.log(this.getstate)

    console.log( this.getstate);

  if (  this.getstate in this.stateDistricts) {

      this.registrationForm.get('inputDistrict')?.setValue('');

      this.registrationForm.get('inputDistrict')?.setValidators(Validators.required);

      this.registrationForm.get('inputDistrict')?.updateValueAndValidity();

      this.districts = this.stateDistricts[ this.getstate];

      console.log(this.districts);


     } else {

      this.registrationForm.get('inputDistrict')?.clearValidators();

      this.registrationForm.get('inputDistrict')?.updateValueAndValidity();

      this.districts = [];

      console.log(this.districts);

     

    }

  }

 
   
    onSubmit() {

      if (this.registrationForm.valid) {
  
        // Create a new Customer object with form values
  
        const newCustomer: Customer = {
          // id: this.cList.length + 1, // Assuming you have a unique ID logic
          userName: this.registrationForm.value.userName,

          email: this.registrationForm.value.email,

          password: this.registrationForm.value.password,
        
          dob:this.registrationForm.value.dob,
        
          address:this.registrationForm.value.address,
          // city: this.registrationForm.value.city,
          // state: this.registrationForm.value.state,
          // country: this.registrationForm.value.country,
          inputStates:this.getstate,
          inputDistrict:this.inputDistrict.value,
          // pincode: this.registrationForm.value.pincode,
          phoneno:this.registrationForm.value.phoneno,
          gender: this.registrationForm.value.gender,
          
       
        };
  
   
  
        // Add the new customer object to the customersList
        console.log(newCustomer);
        this.rService.addCustomer(newCustomer).subscribe((cobj)=>{this.cList=cobj});
        // this.cList.push(newCustomer);
        // console.log("customer list",this.cList);
        this.message='Registration Success';
        this.router.navigate(['/signin']);
      }

    }
  }

