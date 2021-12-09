import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { Ng2CarouselamosModule } from "ng2-carouselamos";
import { MobileComponent } from './mobile/mobile.component';
import { FormsModule } from '@angular/forms';
import { TshirtComponent } from './tshirt/tshirt.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { DescriptionComponent } from './description/description.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MobileComponent,
    TshirtComponent,
    WarehouseComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
