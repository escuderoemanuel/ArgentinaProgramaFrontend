import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-banner-dos',
  templateUrl: './banner-dos.component.html',
  styleUrls: ['./banner-dos.component.css'],
})
export class BannerDosComponent implements OnInit {
  // Crea un usuario de tipo Usuario o Indefinido
  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  public getUsuario(): void {
    this.headerService.getUsuario().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
