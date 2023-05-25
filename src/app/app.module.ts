import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
// import {MatFormFieldModule} from '@angular/material/form-field'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatMenuModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
