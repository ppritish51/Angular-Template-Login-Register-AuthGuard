import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { LoginGuardService } from './auth/login-guard.service';


const routes: Routes = [
  {
    path:'welcome',
    component: WelcomeComponent,
    canActivate:[LoginGuardService]
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[LoginGuardService]
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[LoginGuardService]
  },
  {
    path:'chatbox',
    component:ChatboxComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'',
    redirectTo:'welcome',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
