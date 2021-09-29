import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppMaterial} from './app.material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BookComponent } from './Components/book/book.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductpageComponent } from './Components/productpage/productpage.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderplacedComponent } from './Components/orderplaced/orderplaced.component';
import { MyordersComponent } from './Components/myorders/myorders.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { StarratingComponent } from './Components/starrating/starrating.component';
import { BookcountComponent } from './Components/bookcount/bookcount.component';
import { SearchbarPipe } from './Components/searchbar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    RegistrationComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    ProductComponent,
    ProductpageComponent,
    CartComponent,
    OrderplacedComponent,
    MyordersComponent,
    WishlistComponent,
    StarratingComponent,
    BookcountComponent,
    SearchbarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterial,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
