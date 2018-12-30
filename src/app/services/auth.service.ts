import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private authServerUrl = environment.authServerUrl;

  constructor(private httpClient: HttpClient) {}

  authorizeUser(username: string, password: string) {
    return this.httpPost('/session', { username, password }).pipe(
      tap((result: any) => {
        sessionStorage.setItem('sessionId', result._id);
      })
    );
  }

  getAuthToken(): string {
    return sessionStorage.getItem('sessionId');
  }

  isLoggedIn(): boolean {
    return this.getAuthToken() !== null;
  }

  private httpPost(target: string, body: any) {
    return this.httpClient.post(this.authServerUrl + target, body);
  }
}
