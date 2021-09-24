import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserserviceService} from 'src/app/services/userservice/userservice.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;

  constructor(private route: Router, private userservice: UserserviceService) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    number: new FormControl('', [Validators.required, Validators.minLength(9)])
  })



  submit() {
    console.log(this.form.valid);
    if(this.form.valid) {
      let data = {
        "fullName": this.form.controls.name.value,
        "email": this.form.controls.email.value,
        "password": this.form.controls.password.value,
        "phone": this.form.controls.number.value
      }
      this.userservice.signup(data).subscribe((data: any)=>{
        console.log("signup succesfull",data)
        localStorage.setItem("fullName", data["fullName"]);
        localStorage.setItem("email", data["email"]);
        localStorage.setItem("password", data["password"]);
        localStorage.setItem("phone", data["phone"]);

      
      }, (error) => {
        console.log(error);
      });
    }
  }

  ngOnInit(): void {
  }

}
