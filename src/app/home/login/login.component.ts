import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userDetail  = new FormGroup({
    UserName: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    Password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    });

    constructor(private router:Router) { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
    console.log('submitted',form.value);
    sessionStorage.setItem('userID',JSON.stringify(form.value.UserName));
    this.router.navigate(['/chatbox']);
  }

}
