import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiUrlBuilder {
  buildApiUrl(relativeUrl: string): string {
    return `${environment.apiBaseUrl}${relativeUrl}`;
  }
}
