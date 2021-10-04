import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  token : any;
  baseUrl = environment.baseUrl;
  
  constructor(private httpClient: HttpClient) { }

post(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
  console.log(url,data);
  let tokenOption = { headers: new HttpHeaders({"x-access-token": token})};
  console.log(tokenOption)
  return this.httpClient.post(url, data, isHeaderRequired && tokenOption)
}

get(url:string, isHeaderRequired:any = false, token: any = null) {
  console.log("data got");
  let tokenOption = { headers: new HttpHeaders({"x-access-token": token})};
  return this.httpClient.get(url, isHeaderRequired && tokenOption)
}
delete(url: string, isHeaderRequired: any = false, token: any = null) {
  console.log("data delete");
  let tokenOption = { headers: new HttpHeaders({ "x-access-token": token }) };
  return this.httpClient.delete(url, isHeaderRequired && tokenOption)
}

  put(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log("putting add" + url, token);
    let tokenOption = { headers: new HttpHeaders({ "x-access-token": token }) };
    return this.httpClient.put(url, data, isHeaderRequired && tokenOption)
  }
  getCarts(url: any) {
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.get(this.baseUrl + url, options);
  }

  getprofile(){
    const url = 'src/app/Components/myprofile/details.JSON';
    console.log(url);
    return this.httpClient.get(url);
  }
}