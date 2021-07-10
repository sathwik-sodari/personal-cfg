import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router,private us: UserService) { }

  ngOnInit(): void {
  }



    // onSubmit(data){

    //   // this.regObj.name=data.name;
    //   // this.regObj.hobbies = data.hobbies
      
    //   console.log(data)

    //   console.log(data)
    //   this.us.userRegister(data).subscribe(res=>{
    //     if(res.message === "user creation successfull")
    //     {
    //       alert("user creation succesfull")
    //     }

    //     else{
    //       alert(`res is ${res.message}`)
    //     }
    //   }),err=>{
    //     console.log("err in registration",err)
    //   }

    // }


    // MoveToLogin
   
 
  // public MoveToLogin() {
  //   this.router.navigateByUrl('/login')
    
  // }

  /**
   * moveToMentor
   */
  public MoveToMentor() {
    this.router.navigateByUrl('/register-mentor')
    
  }

  public MoveToMentee() {
    this.router.navigateByUrl('register-mentee')
    
  }

}
