import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/proyecto/all`);
  }

  public addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(
      `${this.apiServerUrl}/proyecto/add`,
      project
    );
  }

  public updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(
      `${this.apiServerUrl}/proyecto/update`,
      project
    );
  }

  public deleteProject(projectId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/proyecto/delete/${projectId}`
    );
  }
}
