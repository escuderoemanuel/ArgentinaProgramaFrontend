import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

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
  isLoggedIn: boolean = false;

  btnModalText: string = 'Entrar';

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.btnModalText = 'Salir';
      } else {
        this.btnModalText = 'Entrar';
      }
    });
  }

  salir() {
    this.authService.setIsLoggedIn(false);
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
    console.log(isLoggedIn);
    this.authService.setIsLoggedIn(isLoggedIn);
    return isLoggedIn;
  }
  /* Fin Variables y funciones del Login */
}
