import { StorageEffects } from './storage.effect';
import { AuthEffects } from './auth.effect';

export * from './storage.effect';
export * from './auth.effect';

export const effects: any[] = [StorageEffects, AuthEffects];
