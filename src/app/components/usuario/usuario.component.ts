import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  // Crea un usuario de tipo Usuario o Indefinido
  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(
    private usuarioService: UsuarioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }
  public getUsuario(): void {
    this.usuarioService.getUsuario().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  // Abrir Modal
  public onOpenModal(mode: string, usuario?: Usuario): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    if (mode === 'edit') {
      this.editUsuario = usuario;
      button.setAttribute('data-bs-target', '#editUsuarioModal');
    }

    container?.appendChild(button);
    button.click();
  }

  // Update --Edit
  public onUpdateUsuario(usuario: Usuario): void {
    this.editUsuario = usuario;
    document.getElementById('edit-usuario-form')?.click();
    this.usuarioService.updateUsuario(usuario).subscribe({
      next: (response: Usuario) => {
        console.log(response);
        this.getUsuario();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
