import * as fromState from '../states';
import * as fromAction from '../actions';

export function AuthReducer(
  state: fromState.AuthState = fromState.initialAuthState,
  action: fromAction.AuthAction
) {
  switch (action.type) {
    case fromAction.LOGIN: {
      return { ...state, success: false, isLoading: true, isError: false };
    }

    case fromAction.LOGIN_SUCCESS: {
      const authEntities = action.payload;
      return {
        ...state,
        authEntities,
        success: true,
        isLoading: false,
        isError: false
      };
    }

    case fromAction.LOGIN_FAILURE: {
      const authEntities = action.payload;
      return {
        ...state,
        authEntities,
        success: false,
        isLoading: false,
        isError: true
      };
    }
  }
  return state;
}
