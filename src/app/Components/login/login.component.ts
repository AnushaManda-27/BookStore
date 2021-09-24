import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserserviceService} from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor( private router: Router, private userservice: UserserviceService) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })


  
  submit() {
    console.log(this.form); 
    if (this.form.valid) {
      let dataLogin = {
        "email": this.form.controls.email.value,
        "password": this.form.controls.password.value
      }

      this.userservice.login(dataLogin).subscribe((dataLogin: any) => {
        console.log(dataLogin)
        localStorage.setItem("email", dataLogin["email"]);
        localStorage.setItem("token", dataLogin.result.accesToken);
        this.router.navigate(['/home']);
      },
      (error)=>{
        console.log(error);
      });

    }


  }

  ngOnInit(): void {
  }

}
