import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  signupUsers: any[] = [];
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loginService.getUsers().subscribe((users: any) => {
      this.signupUsers = users.items;
      console.log(this.signupUsers);
    });
  }
}
