import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class StorageService {
  private backendUrl = environment.backendUrl;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  listStorage() {
    return this.authHttpGet('/storage').pipe(
      filter((items: any[]) => items && items.length > 0),
      map((items: any[]) =>
        items.map(name => {
          const url =
            this.backendUrl +
            '/storage/' +
            name +
            '?accessToken=' +
            this.authService.getAuthToken();

          return {
            name,
            url
          };
        })
      ),
      map(data => {
        return { data };
      })
    );
  }

  private authHttpGet(target) {
    return this.httpGet(
      target + '?accessToken=' + this.authService.getAuthToken()
    );
  }

  private httpGet(target) {
    return this.httpClient.get(this.backendUrl + target);
  }
}
