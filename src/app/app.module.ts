import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import  {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SweetsListingComponent } from './sweets-listing/sweets-listing.component';
import { SweetsFormComponent } from './sweets-form/sweets-form.component';
import { SweetComponent } from './sweets-listing/sweet/sweet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderComponent } from './sweets-listing/sweet/order/order.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SweetsListingComponent,
    SweetsFormComponent,
    SweetComponent,
    OrderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
