import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ErrorTypeChecker {
  isUnauthorized(error: any): boolean {
    return error && error.status === 401;
  }
}
