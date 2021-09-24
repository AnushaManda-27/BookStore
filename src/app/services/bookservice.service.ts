import { Injectable } from '@angular/core';
import { HttpserviceService} from 'src/app/services/httpservice/httpservice.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private httpService: HttpserviceService) { }

  url = environment.baseUrl;

  getBook = () => {
    return this.httpService.get('https://new-bookstore-backend.herokuapp.com/bookstore_user/get/book')
  }
  getCart = (token: any) => {
    return this.httpService.get(`${this.url}/bookstore_user/get_cart_items`, true, token)
  }
}
