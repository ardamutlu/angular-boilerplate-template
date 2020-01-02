// Angular
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
// NGRX
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
// Module components
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "../../../core/auth/_services";
import { AuthEffects, AuthGuard, authReducer } from "../../../core/auth";
import { InterceptService } from "../../../core/_base/crud";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      },
      {
        path: "login",
        component: LoginComponent,
        data: { returnUrl: window.location.pathname }
      },
      {
        path: "register",
        component: LoginComponent,
        data: { returnUrl: window.location.pathname }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    StoreModule.forFeature("auth", authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ],
  exports: [AuthComponent],
  declarations: [AuthComponent, LoginComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard]
    };
  }
}
