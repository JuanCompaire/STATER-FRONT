import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string = '';

  constructor(
    private service: DataService,
    private router: Router,
  ){}

  onSubmit() {
    console.log('Contraseña ingresada:', this.password);
    this.service.login(this.password).subscribe({
      next: (response) => {
        console.log('Respuesta del backend:', response);
        this.router.navigate(['/main-page']);
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
      }
    });
  }
}
