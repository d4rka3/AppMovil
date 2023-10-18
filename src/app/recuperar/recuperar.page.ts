import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  
  constructor(private router: Router) { }

  iniciarCarga() {
   
    
        this.router.navigate(['/login']);
      }
   
  
}


