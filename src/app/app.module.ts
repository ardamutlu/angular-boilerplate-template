import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OverlayModule } from "@angular/cdk/overlay";

// Hammer JS
import "hammerjs";
// NGX Permissions
import { NgxPermissionsModule } from "ngx-permissions";
// NGRX
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
// State
import { metaReducers, reducers } from "./core/reducers";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TemplateModule } from "./views/template/template.module";
import { SplashScreenService } from "./core/_base/layout";
import { PartialsModule } from "./views/partials/partials.module";
import { AuthService } from "./core/auth/_services";
import { AuthModule } from "./views/pages/auth/auth.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    PartialsModule,
    CoreModule,
    OverlayModule,

    // NGRX
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    StoreDevtoolsModule.instrument(),
    AuthModule.forRoot(),

    TranslateModule.forRoot(),
    TemplateModule
  ],
  providers: [AuthService, SplashScreenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
