import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  public experiences: Experience[] = [];
  public editExperience: Experience | undefined;
  public deleteExperience: Experience | undefined;
  isLoggedIn = false;

  constructor(
    private experienceService: ExperienceService,
    public authService: AuthService
  ) {}

  // Para traer experiencias
  ngOnInit(): void {
    this.getExperiences();
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  // Abrir Modal
  public onOpenModal(mode: String, experience?: Experience): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addExperienceModal');
    } else if (mode === 'delete') {
      this.deleteExperience = experience;
      button.setAttribute('data-bs-target', '#deleteExperienceModal');
    } else if (mode === 'edit') {
      this.editExperience = experience;
      button.setAttribute('data-bs-target', '#editExperienceModal');
    }
    container?.appendChild(button);
    button.click();
  }

  // Read --Get
  public getExperiences(): void {
    this.experienceService.getExperience().subscribe({
      next: (Response: Experience[]) => {
        this.experiences = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  // Create --Add
  public onAddExperience(addForm: NgForm): void {
    document.getElementById('add-experience-form')?.click();
    this.experienceService.addExperience(addForm.value).subscribe({
      next: (response: Experience) => {
        console.log(response);
        this.getExperiences();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  // Update --Edit
  public onUpdateExperience(experience: Experience): void {
    this.editExperience = experience;
    document.getElementById('edit-experience-form')?.click();
    this.experienceService.updateExperience(experience).subscribe({
      next: (response: Experience) => {
        console.log(response);
        this.getExperiences();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  // Delete --Delete
  public onDeleteExperience(idExp: number): void {
    this.experienceService.deleteExperience(idExp).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getExperiences();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
