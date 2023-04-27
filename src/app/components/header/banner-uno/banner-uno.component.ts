import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-uno',
  templateUrl: './banner-uno.component.html',
  styleUrls: ['./banner-uno.component.css'],
})
export class BannerUnoComponent {
  bannerUno: {
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
}
