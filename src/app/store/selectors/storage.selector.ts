import {
  MemoizedSelector,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromState from '../states';

export const getStorageStateSelector: MemoizedSelector<
  any,
  fromState.StorageState
> = createFeatureSelector<fromState.StorageState>('storage');

export const getStorageEntitiesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  getStorageStateSelector,
  fromState.getStorageEntities
);

export const getStorageIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  getStorageStateSelector,
  fromState.getStorageIsLoading
);

export const getStorageIsErrorSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  getStorageStateSelector,
  fromState.getStorageIsError
);
