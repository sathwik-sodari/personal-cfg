import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc : HttpClient) { 
    
  }

 userMenteeRegister(data) : Observable <any>
 {
   return this.hc.post('/api/users/register',data);
   
 }

 userMentorRegister(data) : Observable <any>
 {
   return this.hc.post('/api/applicants/register',data);
   
 }


 

 userLogin(data): Observable <any>
 {
   return this.hc.post('/api/users/signin',data)
 }
 
}
