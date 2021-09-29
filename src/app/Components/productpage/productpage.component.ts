import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {BookserviceService} from 'src/app/services/bookservice.service';
import {SiblingserviceService} from 'src/app/services/siblingservice.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {

  data: any
  @Input() books: any;
  
  id: any
  cartBooks: Array<any> = [];
  cart1: any
  cart: any
  token: any
  bookId: any
  homeBook: any
  cartBook: any
  title = 'My Angular Project!';
  todaydate: any;
  componentproperty: any;
  comment: any;
  formdata: any;
  currentVal: any;

  constructor(private router: Router, private service: BookserviceService,  private sibService: SiblingserviceService) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.data)
  }
  getVal(val:any) {
    console.warn(val);
    this.currentVal=val
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    console.log(this.token)
    this.getData()
    
  }

  getData = () => {
    this.data = this.data['value']
  }
  isAddedToCart(cart: any) {

    cart.displaybag = false;

    console.log("cart in home ", this.cartBooks)

    let reqData = {
      "id": cart._id,
      "token": this.token
    }
    this.service.addCart(reqData, this.token).subscribe((response) => {
      console.log(response)
    }, error => {
      console.log(error);
    });
  }
  wishlist(cart: any) {
    let wishlistData = {
      "id": cart._id,
      "token": this.token
    }
    this.service.addwishlist(wishlistData, this.token).subscribe((response) => {
      console.log(response)
    },
      error => {
        console.log(error);
      });
  }
  homepage() {
    this.router.navigate(['home']);
  }
}
