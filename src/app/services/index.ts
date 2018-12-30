import { StorageService } from './storage.service';
import { AuthService } from './auth.service';

export const services: any[] = [AuthService, StorageService];

export const singletonServices: any[] = [AuthService, StorageService];
