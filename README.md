# Details
- This project was generated with Angular CLI version 8.3.20.

## Just clone this and install packages and start to work

## This template contains:

- Login Page
- Registration Page
- Welcome Page(contains link to login and registration page)
- ChatRoom(accessible after login only)

## In this their 2 auth guard:

- One to stop access to chat room without login
- Other to stop access for login/registration page once logged in, they can be only accessed again when logged out

### Welcome page
![alt text](https://github.com/ppritish51/Angular-Template-Login-Register-AuthGuard/blob/master/site%20images/welcome.JPG)
### can't access chat room without login
![alt text](https://github.com/ppritish51/Angular-Template-Login-Register-AuthGuard/blob/master/site%20images/auth.JPG)
### prompted to login 
![alt text](https://github.com/ppritish51/Angular-Template-Login-Register-AuthGuard/blob/master/site%20images/login.JPG)
### access to chat room when logged in
![alt text](https://github.com/ppritish51/Angular-Template-Login-Register-AuthGuard/blob/master/site%20images/chat%20box.JPG)
### 2nd login-guard prevent from going to login page again if you are already logged in

Hope This is helpful to start your project and give it a good shape :)

<br>
<br>




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
