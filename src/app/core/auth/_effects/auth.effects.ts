// Angular
import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
// RxJS
import { tap } from "rxjs/operators";
import { defer, Observable, of } from "rxjs";
// NGRX
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
// Auth actions
import {
  AuthActionTypes,
  Login,
  Logout,
  UserRequested
} from "../_actions/auth.actions";
import { AuthService } from "../_services";
import { AppState } from "../../reducers";
import { environment } from "../../../../environments/environment";

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap(action => {
      localStorage.setItem(environment.authTokenKey, action.payload.authToken);
      this.store.dispatch(new UserRequested());
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => {
      localStorage.removeItem(environment.authTokenKey);
      this.router.navigate(["/auth/login"], {
        queryParams: { returnUrl: this.returnUrl }
      });
    })
  );

  @Effect()
  init$: Observable<Action> = defer(() => {
    const userToken = localStorage.getItem(environment.authTokenKey);
    let observableResult = of({ type: "NO_ACTION" });
    if (userToken) {
      observableResult = of(new Login({ authToken: userToken }));
    }
    return observableResult;
  });

  private returnUrl: string;

  constructor(
    private actions$: Actions,
    private router: Router,
    private auth: AuthService,
    private store: Store<AppState>
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
  }
}
