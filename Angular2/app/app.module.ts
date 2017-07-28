import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { Profile } from './Components/profile.component';
import { AppComponent }   from './Components/app.component';
import { RegistrationComponent } from './Components/registration.component';
import { AuthorizationComponent } from './Components/authorization.component';
import { BaseComponent } from './Components/base.component';
import { AlertComponent } from './Components/status.component';
import { HeaderComponent } from './Components/header.component';

import { AlertService} from './Service/status.service';
import { NewsService } from './Service/news.service';
import {AuthService } from './Service/auth-service.service';
import { AuthGuard } from './Service/auth.guard';
import { FollowAuthService } from './Service/follow-auth.service';



const appRoutes: Routes = [
    { path: '', component: AppComponent,canActivate: [AuthGuard]},
    { path: 'login', component: AuthorizationComponent},
    { path: 'registration', component: RegistrationComponent },
    { path: 'profile', component: Profile },
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, BaseComponent, RegistrationComponent, AuthorizationComponent, AlertComponent, HeaderComponent, Profile ],
    bootstrap:    [ BaseComponent ],
    providers: [ AlertComponent, AlertService, NewsService, AuthService, AuthGuard, FollowAuthService ],
})
export class AppModule { }