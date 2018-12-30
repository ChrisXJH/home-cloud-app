import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/storage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'storage',
    component: FileExplorerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'storage/video',
    component: FileExplorerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'storage/:filename',
    component: FileExplorerComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
