import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"],
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: "",
    email: "",
    password: "",
  };
  loginObj: any = {
    userName: "",
    password: "",
  };
  constructor(private loginService: LoginService, private route: Router) {}

  ngOnInit() {
    const localData = localStorage.getItem("signupUsers");
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem("signupUsers", JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: "",
      email: "",
      password: "",
    };
  }
  login() {
    this.loginService.onLogin(this.loginObj).subscribe({
      next: (res: any) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          this.route.navigateByUrl("/dashboard");
        } else {
          console.error("Token not found in the response");
          // Optionally, show an error message to the user
        }
      },
      error: (err) => {
        console.error("Login failed:", err);
        // Optionally, display an error message to the user
      },
    });
  }
}
