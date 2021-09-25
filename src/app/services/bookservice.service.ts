import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpserviceService} from 'src/app/services/httpservice/httpservice.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private refresh = new Subject<void>();

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
  
  getCart = (token: any) => {
    return this.httpService.get(`${this.url}/bookstore_user/get_cart_items`, true, token)
  }
}
