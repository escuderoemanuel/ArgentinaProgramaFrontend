import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  /* Variables fijas del Header */
  banner: {
    imgInstitucional: string;
    iconLinkedIn: string;
    iconGithub: string;
    iconEmail: string;
  } = {
    imgInstitucional: '../../assets/institucional/APLogo.png',
    iconLinkedIn: '../../assets/redes/linkedin.png',
    iconGithub: '../../assets/redes/github.png',
    iconEmail: '../../assets/redes/mail.png',
  };
  /* FIN Variables fijas del Header */

  /* Variables y funciones del Login */
  isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  btnModalText: string = 'Entrar';

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit() {
    //console.log(this.isLoggedIn);
    this.authService.setIsLoggedIn(this.isLoggedIn);
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  salir() {
    this.authService.setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  }

  checkLogin(): boolean {
    let emailInput = document.getElementById(
      'typeEmailX-2'
    ) as HTMLInputElement;
    const enteredEmail = emailInput.value.trim();
    let passwordInput = document.getElementById(
      'typePasswordX-2'
    ) as HTMLInputElement;
    const enteredPassword = passwordInput.value.trim();
    const adminEmail = 'admin@admin.com';
    const adminPassword = 'admin';
    const isLoggedIn =
      enteredEmail === adminEmail && enteredPassword === adminPassword;
    if (isLoggedIn) {
      const modal = document.getElementById('login');
      if (modal) {
        emailInput.value = '';
        passwordInput.value = '';
      }
    }
    //console.log(isLoggedIn);
    this.authService.setIsLoggedIn(isLoggedIn);
    return isLoggedIn;
  }
  /* Fin Variables y funciones del Login */

  /* Funciones para mostrar u ocultar botón según isLoggedIn */
  showButton(): boolean {
    return this.isLoggedIn === true;
  }

  hideButton(): boolean {
    return this.isLoggedIn === false;
  }
  /* Fin Funciones para mostrar u ocultar botón según isLoggedIn */
}
