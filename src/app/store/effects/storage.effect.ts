import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { StorageService } from '../../services/storage.service';

import * as fromAction from '../actions';

@Injectable()
export class StorageEffects {
  constructor(
    private actions$: Actions,
    private storageService: StorageService
  ) {}

  @Effect()
  ListStorage$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.LIST_STORAGE),
    switchMap((result: any) =>
      this.storageService
        .listStorage()
        .pipe(
          map(
            res => new fromAction.ListStorageSuccess(res),
            catchError(err => of(new fromAction.ListStorageFailure()))
          )
        )
    )
  );
}
