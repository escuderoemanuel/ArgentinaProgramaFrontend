import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footer: { rights: string; developer: string; logoUrl: string } = {
    rights: '© 2023 | All Rights Reserved',
    developer: '[ Powered by Emanuel Escudero ]',
    logoUrl: 'https://i.ibb.co/nk8TBHQ/Logo2023.png',
  };
}
