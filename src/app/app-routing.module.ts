import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterMenteeComponent } from './register-mentee/register-mentee.component';
import { RegisterMentorComponent } from './register-mentor/register-mentor.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'register-mentee',component:RegisterMenteeComponent},
  {path:'register-mentor',component:RegisterMentorComponent},
  { path:'', redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
