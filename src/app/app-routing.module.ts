import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { LoginComponent } from './core/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
