import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseComponent } from "./views/template/base/base.component";
import { AuthGuard } from "./core/auth";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./views/pages/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "",
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/pages/dashboard/dashboard.module").then(
            m => m.DashboardModule
          )
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "**", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  { path: "**", redirectTo: "error/403", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
