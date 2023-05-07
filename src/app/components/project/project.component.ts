import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = [];
  public editProject: Project | undefined;
  public deleteProject: Project | undefined;
  isLoggedIn = false;

  constructor(
    private projectService: ProjectService,
    public authService: AuthService
  ) {}

  // Para traer Projects
  ngOnInit(): void {
    this.getProjects();
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  // Abrir Modal
  public onOpenModal(mode: String, projects?: Project): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addProjectModal');
    } else if (mode === 'delete') {
      this.deleteProject = projects;
      button.setAttribute('data-bs-target', '#deleteProjectModal');
    } else if (mode === 'edit') {
      this.editProject = projects;
      button.setAttribute('data-bs-target', '#editProjectModal');
    }
    container?.appendChild(button);
    button.click();
  }

  // Read --Get
  public getProjects(): void {
    this.projectService.getProject().subscribe({
      next: (Response: Project[]) => {
        this.projects = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  // Create --Add
  public onAddProject(addForm: NgForm): void {
    document.getElementById('add-project-form')?.click();
    this.projectService.addProject(addForm.value).subscribe({
      next: (response: Project) => {
        console.log(response);
        this.getProjects();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  // Update --Edit
  public onUpdateProject(project: Project): void {
    this.editProject = project;
    document.getElementById('edit-project-form')?.click();
    this.projectService.updateProject(project).subscribe({
      next: (response: Project) => {
        console.log(response);
        this.getProjects();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  // Delete --Delete
  public onDeleteProject(idProyecto: number): void {
    this.projectService.deleteProject(idProyecto).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getProjects();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
