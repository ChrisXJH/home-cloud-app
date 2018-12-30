import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private store: Store<fromStore.StoreState>,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleLogin(event) {
    event.preventDefault();
    const username = event.target.querySelector('[name=username]').value;
    const password = event.target.querySelector('[name=password]').value;
    this.store.dispatch(new fromStore.Login({ username, password }));
    this.subscription = this.store
      .pipe(
        select(fromStore.getAuthSuccessSelector),
        tap(success => {
          if (success) {
            this.router.navigate(['/storage']);
          }
        })
      )
      .subscribe();
  }
}
