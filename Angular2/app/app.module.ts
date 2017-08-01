import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { Profile } from './Components/profile.component';
import { NewsListComponent }   from './Components/news-list.component';
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
import { ProfileService } from './Service/get-profile.service';


const appRoutes: Routes = [
    { path: '', component: NewsListComponent, canActivate: [AuthGuard]},
    { path: 'login', component: AuthorizationComponent},
    { path: 'registration', component: RegistrationComponent },
    { path: ':username', component: Profile },
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ NewsListComponent, BaseComponent, RegistrationComponent, AuthorizationComponent, AlertComponent, HeaderComponent, Profile ],
    bootstrap:    [ BaseComponent ],
    providers: [ AlertComponent, AlertService, NewsService, AuthService, AuthGuard, FollowAuthService, ProfileService ],
})
export class AppModule { }