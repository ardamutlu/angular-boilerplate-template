// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SafePipe } from "./_base/layout";

@NgModule({
  imports: [CommonModule],
  declarations: [SafePipe],
  exports: [SafePipe],
  providers: []
})
export class CoreModule {}
