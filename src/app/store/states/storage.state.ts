export interface StorageState {
  storageEntities: any;
  isLoading: boolean;
  isError: boolean;
}

export const initialStorageState: StorageState = {
  storageEntities: {},
  isLoading: false,
  isError: false
};

export const getStorageEntities = (state: StorageState) =>
  state.storageEntities;

export const getStorageIsLoading = (state: StorageState) => state.isLoading;

export const getStorageIsError = (state: StorageState) => state.isError;
