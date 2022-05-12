import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule }from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesEnrollComponent } from './pages/courses-enroll/courses-enroll.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AuthGuard } from './auth.guard';
import { RegisterService } from './pages/register.service';
import { AuthInterCeptor } from './auth.interceptor';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RatingModule} from 'ng-starrating';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { QuestionComponent } from './pages/question/question.component';
import { ChangeBgDirective } from './change-bg.directive';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegistrationComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    CoursesComponent,
    CoursesEnrollComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    WelcomeComponent,
    QuestionComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule ,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    RatingModule,
    
   
 
   
  ],
  providers: [{
   provide:HTTP_INTERCEPTORS,
   useClass:AuthInterCeptor,
   multi:true
  },
    AuthGuard,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
