import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserLoginComponent } from "./components/user-login/user-login.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" }, // Default route to login
  { path: "dashboard", component: DashboardComponent }, // Dashboard route
  { path: "login", component: UserLoginComponent }, // Explicit login route
  { path: "**", component: UserLoginComponent }, // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
