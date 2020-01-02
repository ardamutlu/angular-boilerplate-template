// Angular
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Layout partials
import { SplashScreenComponent } from "./layout";

@NgModule({
  declarations: [SplashScreenComponent],
  exports: [SplashScreenComponent],
  imports: [CommonModule, RouterModule]
})
export class PartialsModule {}
