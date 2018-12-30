import {
  MemoizedSelector,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromState from '../states';

export const getAuthStateSelector: MemoizedSelector<
  any,
  fromState.AuthState
> = createFeatureSelector<fromState.AuthState>('auth');

export const getAuthEntitiesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  getAuthStateSelector,
  fromState.getAuthEntities
);

export const getAuthSuccessSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  getAuthStateSelector,
  fromState.getAuthSuccess
);

export const getAuthIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  getAuthStateSelector,
  fromState.getAuthIsLoading
);

export const getAuthIsErrorSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  getAuthStateSelector,
  fromState.getAuthIsError
);
