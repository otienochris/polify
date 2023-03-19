import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private toaster: ToastrService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });

    console.log(this.loginForm);
  }

  onSubmit() {
    if(this.loginForm.status.includes('INVALID')) {
      this.toaster.error("There are errors in the form you are trying to submit", 'LOGIN')
    } else if (this.loginForm.errors) {
      console.log(this.loginForm.value);
    } else if (!this.loginForm.errors) {
      let username = this.loginForm.value['username'];
      let password = this.loginForm.value['password'];
      if (username === 'user' && password === 'pass') {
        this.toaster.success("Welcome Back " + username , 'LOGIN')
      } else {
        this.toaster.error("Invalid Credentials", 'LOGIN')
      }
    }
  }



}
