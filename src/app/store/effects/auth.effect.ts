import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';

import * as fromAction from '../actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  login$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.LOGIN),
    switchMap((action: any) =>
      this.authService
        .authorizeUser(action.payload.username, action.payload.password)
        .pipe(
          map(result => new fromAction.LoginSuccess(result)),
          catchError(err => of(new fromAction.LoginFailure(err)))
        )
    )
  );
}
