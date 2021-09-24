import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SiblingserviceService {

  sendMessage = new Subject();

  constructor() { }

  communicateMessage(msg: any) {
    this.sendMessage.next(msg)
  }
}
