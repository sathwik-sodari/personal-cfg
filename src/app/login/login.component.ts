import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private us : UserService, private router:Router) { }


  ngOnInit(): void {
  }

  onSubmit(data){
    console.log(data)
    this.us.userLogin(data).subscribe(res=>{
      if(res.message==="login success")
      {
        alert(`${res.message}`)
        localStorage.setItem("userObj",JSON.stringify(res.userObj));
        localStorage.setItem("token",res.token)
      }
      else{
        alert(`${res.message}`)
      }
    },
    err=>{
      alert("login error");
      console.log("login err",err)
    })
  }



  /**
   * MoveToRegister
   */
  public MoveToRegister() {
    this.router.navigateByUrl('/register')
    
  }

}
