import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  // Guarda la dirección de la apiUrl
  private apiServerUrl = environment.apiUrl;

  // constructor
  constructor(private http: HttpClient) {}

  // Método get (Read)
  public getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`);
  }

  // Método update (Update)
  public updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiServerUrl}/update`, usuario);
  }
}
