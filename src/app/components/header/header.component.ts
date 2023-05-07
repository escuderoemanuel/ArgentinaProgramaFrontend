import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  btnModalText: string = 'Entrar';
  isLoggedIn: boolean = false;
  btnSalir = document.getElementById('salir');
  btnEntrar = document.getElementById('entrar');

  ngOnInit() {
    console.log(this.isLoggedIn);
  }

  salir() {
    window.location.reload();
  }

  botones(): any {
    if (this.isLoggedIn === false) {
      this.btnSalir?.classList.add('invisible');
      // btn salir invisible
    } else {
      // el btn entrar invisible
      this.btnEntrar?.classList.add('invisible');
    }
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
    this.isLoggedIn = isLoggedIn;
    this.botones();
    return isLoggedIn;
  }
  /* Fin Variables y funciones del Login */
  constructor(private router: Router) {}
}
