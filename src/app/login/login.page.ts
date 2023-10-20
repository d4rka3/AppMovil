import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  Usuario: any;
  hide = false;

  constructor(private router: Router, private api:ApiService ) { }
  
  login() {
    this.api.getNameuser().subscribe((res)=>{
      console.log(res[0]);
    },(error)=>{
      console.log(error);
    

        let navigationExtras: NavigationExtras = {
          state: {
            username: this.Usuario
          }
        };

        this.router.navigate(['/home'], navigationExtras);
      }
    )};

  togglePassword() {
    this.hide = !this.hide;
  }


}








