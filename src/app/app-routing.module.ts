import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProductpageComponent} from 'src/app/Components/productpage/productpage.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderplacedComponent } from './Components/orderplaced/orderplaced.component';
import { MyordersComponent } from './Components/myorders/myorders.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { MyprofileComponent } from './Components/myprofile/myprofile.component';
const routes: Routes = [
  {
    path: '', component: RegistrationComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },]},
  { path: 'home', component: HomepageComponent },
 
  
  { path: 'productpage', component: ProductpageComponent},
  { path: 'cart', component: CartComponent},
  { path: 'orderplaced', component: OrderplacedComponent},
  {path : 'myorders', component: MyordersComponent},
  {path: 'wishlist', component: WishlistComponent},
  { path: 'myprofile', component: MyprofileComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
