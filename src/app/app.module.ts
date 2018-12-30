import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards';
import { singletonServices } from './services';

import * as fromReducer from './store/reducers';
import * as fromEffect from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    FileExplorerComponent,
    FileListComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromReducer.reducers),
    EffectsModule.forRoot(fromEffect.effects)
  ],
  providers: [...singletonServices, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
