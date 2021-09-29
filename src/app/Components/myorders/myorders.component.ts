import { Component, OnInit } from '@angular/core';
import {BookserviceService} from 'src/app/services/bookservice.service';
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit {


  cartBooks: Array<any> = [];
  cartBook: any
  addressDetails: any
  address: any
  removeById: any
  token: any
  length: any

  constructor(private bookService: BookserviceService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getItems();
  }

  getItems = () => {
    console.log("get cart API")
    this.bookService.getCart(this.token).subscribe((data: any) => {
      this.cartBooks = data['result']
      console.log(this.cartBooks);
      for (this.cartBook of this.cartBooks) {
        // console.log(this.cartBook.user_id.address);
        console.log(this.cartBook.product_id._id);
      }
    })
  }
}
