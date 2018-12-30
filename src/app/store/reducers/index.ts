import { ActionReducerMap } from '@ngrx/store';

import { StorageReducer } from './storage.reducer';
import { AuthReducer } from './auth.reducer';

import * as fromState from '../states';

export * from './storage.reducer';

export const reducers: ActionReducerMap<fromState.StoreState> = {
  storage: StorageReducer,
  auth: AuthReducer
};
