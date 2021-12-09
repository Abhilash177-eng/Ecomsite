import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { DescriptionComponent } from './description/description.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'mobile',component:MobileComponent},
  {path:'tshirt',component:TshirtComponent},
  {path:'warehouse',component:WarehouseComponent},
  {path:'desc',component:DescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
