import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit{
  public skills: Skill[] = [];
  public editSkill: Skill | undefined;
  public deleteSkill: Skill | undefined;
  isLoggedIn = false;

  constructor(
    private skillService: SkillService,
    public authService: AuthService
  ) {}

  // Para traer Skills
  ngOnInit(): void {
    this.getSkills();
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  // Abrir Modal
  public onOpenModal(mode: String, skills?: Skill): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addSkillModal');
    } else if (mode === 'delete') {
      this.deleteSkill = skills;
      button.setAttribute('data-bs-target', '#deleteSkillModal');
    } else if (mode === 'edit') {
      this.editSkill = skills;
      button.setAttribute('data-bs-target', '#editSkillModal');
    }
    container?.appendChild(button);
    button.click();
  }

  // Read --Get
  public getSkills(): void {
    this.skillService.getSkill().subscribe({
      next: (Response: Skill[]) => {
        this.skills = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  // Create --Add
  public onAddSkill(addForm: NgForm): void {
    document.getElementById('add-skill-form')?.click();
    this.skillService.addSkill(addForm.value).subscribe({
      next: (response: Skill) => {
        console.log(response);
        this.getSkills();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  // Update --Edit
  public onUpdateSkill(skill: Skill): void {
    this.editSkill = skill;
    document.getElementById('edit-skill-form')?.click();
    this.skillService.updateSkill(skill).subscribe({
      next: (response: Skill) => {
        console.log(response);
        this.getSkills();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  // Delete --Delete
  public onDeleteSkill(idSkill: number): void {
    this.skillService.deleteSkill(idSkill).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getSkills();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
