import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
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
}
