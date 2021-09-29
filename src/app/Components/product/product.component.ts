import {getNumberOfCurrencyDigits} from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { SiblingserviceService } from 'src/app/services/siblingservice.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  p: number = 1;
  @Input() books: any;
  @Input() searchText: any;

  id: any
  cartBooks: Array<any> = [];
  cart1: any
  cart: any
  token: any
  bookId: any
  homeBook: any
  cartBook: any
  searchWord: any;

  constructor(private router: Router, private service: BookserviceService, private route: ActivatedRoute, private sibService: SiblingserviceService) {
  }

  ngOnInit(): void {
    this.service.rcvSearch.subscribe((response: any)=>
    {
      this.searchWord = response;
    })
    this.token = localStorage.getItem('token')
    console.log(this.searchText);
  
    
    // console.log(this.token);
    this.getCount()

    for (this.homeBook of this.books) {
      console.log("homeId", this.homeBook)


    }
  }

  getCount() {
    this.service.getCart(this.token).subscribe((data: any) => {
      this.cartBooks = data['result']

      this.sibService.communicateMessage(this.cartBooks.length)
    })

    for (this.homeBook of this.books) {
      console.log("homeId ", this.homeBook._id)
    }
  }


  toProductPage(id: any) {
    this.id = id
    this.router.navigate(['productpage/'], { state: { value: id } })
  }




  }

 

