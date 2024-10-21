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
<<<<<<< HEAD
    logoUrl: 'https://i.ibb.co/Gxk0ktL/Logo2024.png',
=======
    logoUrl: 'https://i.ibb.co/hc02MDb/Logo.png',
>>>>>>> e0e0c8501ee5de73edd223d38ae6b6a67e63ac4b
  };
}
