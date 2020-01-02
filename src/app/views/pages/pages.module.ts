// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
// Partials
import { PartialsModule } from "../partials/partials.module";
// Pages
import { CoreModule } from "../../core/core.module";

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, HttpClientModule, CoreModule, PartialsModule],
  providers: []
})
export class PagesModule {}
