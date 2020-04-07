import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, AbstractControl } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  

  userDetail  = new FormGroup({
    UserName: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    Password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    ConfirmPassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
    Email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  },{ 
    validators: this.checkPassword.bind(this)
  });
  

  constructor(private router:Router) { }

  ngOnInit() {
  }

  checkPassword(formGroup: FormGroup) {
    const { value: password } = formGroup.get('Password');
    const { value: confirmPassword } = formGroup.get('ConfirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  

  OnSubmit(form: NgForm) {
    console.log('submitted',form.value);
    this.router.navigate(['/login']);
    /*this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
        }
        else
          this.toastr.error(data.Errors[0]);
      });
    */
  }

}
