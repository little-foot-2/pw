import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthSession {
  constructor(
    private cookieService: CookieService,
  ) {}

  getAuthToken(): string {
    return this.cookieService.get('authToken');
  }

  setAuthToken(authToken: string): void {
    this.cookieService.set('authToken', authToken);
  }

  deleteAuthToken(): void {
    this.cookieService.delete('authToken');
  }
}
