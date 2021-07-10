import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-mentee',
  templateUrl: './register-mentee.component.html',
  styleUrls: ['./register-mentee.component.css']
})
export class RegisterMenteeComponent implements OnInit {

  constructor(private router:Router,private us: UserService) { }

  ngOnInit(): void {
  }



  CareerPreferences

  public regObj = {
    name:"",
    emailid:"",
    password:"",
    hobbies:"",
    CareerPreferences:"",
    GenderPreferences:"",
    FirstLanguagePreference:"",
    SecondLanguagePreference:"",


  }



  state_arr = ["Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir",
   "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", 
   "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", 
   "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal"];









  onSubmit(data){
      
    console.log(data)


    this.us.userMenteeRegister(data).subscribe(res=>{
      if(res.message === "user creation successfull")
      {
        alert("user creation succesfull")
      }

      else{
        alert(`res is ${res.message}`)
      }
    }),err=>{
      console.log("err in registration",err)
    }

  }


  // MoveToLogin
 

public MoveToLogin() {
  this.router.navigateByUrl('/login')
  
}

}







