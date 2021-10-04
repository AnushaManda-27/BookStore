import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SiblingserviceService} from 'src/app/services/siblingservice.service'
import {BookserviceService} from 'src/app/services/bookservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  countItem: any;
  badgeContent: any;
  isSearch = false;

  constructor(private router: Router, private sibService: SiblingserviceService, private bookService: BookserviceService) { }

  ngOnInit(): void {
    this.sibService.sendMessage.subscribe((message: any) => {
      this.countItem = message
      console.log("header count" + this.countItem)
      this.badgeContent = this.countItem;
    });
  }

  homepage() {
    this.router.navigate(['/home'])
  }

  getCart() {
    this.router.navigate(['/cart'])
  }

  getwishlist() {
    this.router.navigate(['/wishlist'])
  }

  shareSearchWord(search: any) {
    this.bookService.sendSearch(search);
  }
  myprofile() {
    this.router.navigate(['/myprofile'])
  }
  logout() {
    sessionStorage.clear();
    localStorage.clear();

    this.router.navigateByUrl('login')
  }

}
