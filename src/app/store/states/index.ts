import { StorageState } from './storage.state';
import { AuthState } from './auth.state';

export * from './storage.state';
export * from './auth.state';

export interface StoreState {
  storage: StorageState;
  auth: AuthState;
}
