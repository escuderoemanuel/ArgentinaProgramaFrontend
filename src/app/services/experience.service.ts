import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiServerUrl}/experiencia/all`);
  }

  public addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(
      `${this.apiServerUrl}/experiencia/add`,
      experience
    );
  }

  public updateExperience(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(
      `${this.apiServerUrl}/experiencia/update`,
      experience
    );
  }

  public deleteExperience(experienceId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/experiencia/delete/${experienceId}`
    );
  }
}
