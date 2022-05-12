import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesEnrollComponent } from './pages/courses-enroll/courses-enroll.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthGuard } from './auth.guard';
import { QuestionComponent } from './pages/question/question.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path:"login" ,component:LoginComponent,
   children:[{path:"" ,component:RegistrationComponent}]
  },
  {path:"signup",component:RegistrationComponent,
  children:[{path:"" ,component:LoginComponent}]
 },
  {path:"dashboard", component:DashboardComponent,canActivate:[AuthGuard]},
 
  

  {path:"home", component:HomeComponent},
  {path:"search/:searchTerm",component:CoursesComponent,canActivate:[AuthGuard]},
  {path:'course',component:CoursesComponent,canActivate:[AuthGuard]},
  {path:'course/:id',component:CoursesEnrollComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path:'contact',component:ContactComponent,canActivate:[AuthGuard]},
  {path:'welcome',component:WelcomeComponent,canActivate:[AuthGuard]},
  {path:'quize',component:QuestionComponent,canActivate:[AuthGuard]},

  {
    path:"",redirectTo:'/login',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
