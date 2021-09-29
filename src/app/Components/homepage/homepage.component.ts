import { Component, OnInit } from '@angular/core';
import {BookserviceService} from 'src/app/services/bookservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isSearch = false;

  constructor() { }

  ngOnInit(): void {
  }

}
