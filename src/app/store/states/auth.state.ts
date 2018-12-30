export interface AuthState {
  authEntities: any;
  success: boolean;
  isLoading: boolean;
  isError: boolean;
}

export const initialAuthState: AuthState = {
  authEntities: {},
  success: false,
  isLoading: false,
  isError: false
};

export const getAuthEntities = (state: AuthState) => state.authEntities;

export const getAuthSuccess = (state: AuthState) => state.success;

export const getAuthIsLoading = (state: AuthState) => state.isLoading;

export const getAuthIsError = (state: AuthState) => state.isError;
