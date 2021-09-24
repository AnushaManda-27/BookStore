import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import {HomepageComponent} from './Components/homepage/homepage.component';
import { ProductpageComponent} from 'src/app/Components/productpage/productpage.component';

const routes: Routes = [
  {
    path: '', component: RegistrationComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },]},
  { path: 'home', component: HomepageComponent },
  { path: 'productpage', component: ProductpageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
