import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {}

  setIsLoggedIn(isLoggedIn: boolean): void {
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
    this.isLoggedInSubject.next(isLoggedIn);
  }

  getIsLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
