// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
// Components
import { BaseComponent } from "./base/base.component";
import { PagesModule } from "../pages/pages.module";

@NgModule({
  declarations: [BaseComponent],
  exports: [BaseComponent],
  providers: [],
  imports: [CommonModule, RouterModule, TranslateModule.forChild(), PagesModule]
})
export class TemplateModule {}
