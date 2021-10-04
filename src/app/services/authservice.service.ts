import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authservice: UserserviceService, private router: Router) { }

  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
}
}