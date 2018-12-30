import { Action } from '@ngrx/store';

export const LIST_STORAGE = '[Storage] List Storage';
export const LIST_STORAGE_SUCCESS = '[Storage] List Storage Success';
export const LIST_STORAGE_FAILURE = '[Storage] List Storage Failure';

export class ListStorage implements Action {
  readonly type = LIST_STORAGE;
  constructor(public payload: any) {}
}

export class ListStorageSuccess implements Action {
  readonly type = LIST_STORAGE_SUCCESS;
  constructor(public payload: any) {}
}

export class ListStorageFailure implements Action {
  readonly type = LIST_STORAGE_FAILURE;
  constructor() {}
}

export type StorageAction =
  | ListStorage
  | ListStorageSuccess
  | ListStorageFailure;
