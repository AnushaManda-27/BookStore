import { Injectable } from '@angular/core';
import { HttpserviceService} from 'src/app/services/httpservice/httpservice.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpservice: HttpserviceService) { }
  url = environment.baseUrl;
  signup = (data: any) => {
    return this.httpservice.post(`${this.url}/bookstore_user/registration`, data)
  }

  login = (data: any) => {
    return this.httpservice.post(`${this.url}/bookstore_user/login`, data)
  }
}
