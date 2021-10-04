import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BookserviceService} from 'src/app/services/bookservice.service';
import {SiblingserviceService} from 'src/app/services/siblingservice.service';
import {HttpserviceService} from 'src/app/services/httpservice/httpservice.service';
import person from 'src/app/Components/myprofile/myprofile.json';
interface persons {
  fullName: String;
  email: String;
  password: String;
  phone: Number;
  address: String;
  city: String;
  state: String;

}
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {


  private example = person;
  personlist:persons[] = person;

  public contactForm!: FormGroup;

  constructor(private httpservice:HttpserviceService ,public formBuilder: FormBuilder, private sibService: SiblingserviceService, private router: Router, private bookService: BookserviceService) { }

  ngOnInit(): void {
   
  }
  
  continue() {
    this.router.navigate(['home']);
    
  }
  homepage() {
    this.router.navigate(['home']);
  }
}

