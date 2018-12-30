import * as fromState from '../states';
import * as fromAction from '../actions';

export function StorageReducer(
  state: fromState.StorageState = fromState.initialStorageState,
  action: fromAction.StorageAction
) {
  switch (action.type) {
    case fromAction.LIST_STORAGE: {
      return { ...state, isLoading: true, isError: false };
    }

    case fromAction.LIST_STORAGE_SUCCESS: {
      const storageEntities = action.payload;
      return { ...state, storageEntities, isLoading: false, isError: false };
    }

    case fromAction.LIST_STORAGE_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
  }
  return state;
}
