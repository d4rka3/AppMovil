import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage {
  Usuario: any;
  showSpinner = false;
  loadingPercentage = 0;
  hide = false;

  constructor(private router: Router) { }

  login() {
    this.showSpinner = true;
    const interval = setInterval(() => {
      this.loadingPercentage += 10;
      if (this.loadingPercentage >= 100) {
        clearInterval(interval);
        this.showSpinner = false;


        let navigationExtras: NavigationExtras = {
          state: {
            username: this.Usuario
          }
        };

        this.router.navigate(['/home'], navigationExtras);
        localStorage.setItem('username', this.Usuario);
      }
    }, 100);
  }

  togglePassword() {
    this.hide = !this.hide;
  }
}








