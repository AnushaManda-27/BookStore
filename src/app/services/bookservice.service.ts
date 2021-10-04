import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpserviceService} from 'src/app/services/httpservice/httpservice.service';
import { environment } from 'src/environments/environment';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private refresh = new Subject<void>();
  private search = new BehaviorSubject([]);
  rcvSearch = this.search.asObservable();

  getRefreshedData() {
    return this.refresh;
  }

  constructor(private httpService: HttpserviceService) { }

  url = environment.baseUrl;

  getBook = () => {
    return this.httpService.get(`${this.url}/bookstore_user/get/book`)
  }
  addCart = (data: any, token: any) => {
    console.log(data, token)
    return this.httpService.post(`${this.url}/bookstore_user/add_cart_item/${data.id}`, {}, true, token)
  } 
  addwishlist = (data: any, token: any) => {
    return this.httpService.post(`${this.url}/bookstore_user/add_wish_list/${data.id}`, {}, true, token)
  }
  getCarts(url: any) {
    console.log("given data is", url);
    return this.httpService.getCarts(url);
  }
  
  getCart = (token: any) => {
    return this.httpService.get(`${this.url}/bookstore_user/get_cart_items`, true, token)
  }
  deleteItem = (data: any, token: any) => {
    console.log(data, token)
    return this.httpService.delete(`${this.url}/bookstore_user/remove_cart_item/${data}`, true, token)
  }

  putAddress = (data: any, token: any) => {
    return this.httpService.put(`${this.url}/bookstore_user/edit_user`, data, true, token)
  }
  order = (data: any, token: any) => {
    // console.log(data, token)
    return this.httpService.post(`${this.url}/bookstore_user/add/order`, data, true, token)
  }
  getWishlist = (token: any) => {
    return this.httpService.get(`${this.url}/bookstore_user/get_wishlist_items`, true, token)
  }
  deleteWishlist = (data: any, token: any) => {
    console.log(data, token)
    return this.httpService.delete(`${this.url}/bookstore_user/remove_wishlist_item/${data}`, true, token)
  }
  sendSearch(searchWord: any){
    this.search.next(searchWord);
  }
}
