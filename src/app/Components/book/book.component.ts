import { Component, OnInit } from '@angular/core';
import {BookserviceService} from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Array<any> = [];

  constructor(private bookService: BookserviceService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData = () => {
    this.bookService.getBook().subscribe((data: any) => {
      this.books = data['result']
      console.log(this.books)
      console.log(this.books.length)
    }, error => {
      console.log(error);
      
    });
  }

}
