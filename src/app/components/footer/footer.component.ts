import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footer: { rights: string; developer: string; logoUrl: string } = {
    rights: '© 2024 | All Rights Reserved',
    developer: '[ Developed by Emanuel Escudero ]',
    logoUrl: 'https://i.ibb.co/Gxk0ktL/Logo2024.png',
  };
}
