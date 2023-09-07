import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  showSpinner = false;
  loadingPercentage = 0;
  Usuario: any;
  hide = false;

  constructor(private router: Router) {}

  Formulario(Usuario: any) {
    localStorage.setItem('Usuario', Usuario);

    this.showSpinner = true;
    const interval = setInterval(() => {
      this.loadingPercentage += 10;
      if (this.loadingPercentage >= 100) {
        clearInterval(interval);
        this.showSpinner = false;
        
        this.router.navigate(['/home']);
      }
    }, 200);
  }

  togglePassword() {
    this.hide = !this.hide;
  }
}








