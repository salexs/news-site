import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './AppComponent/app.component';
import { RegistrationComponent } from './Registration/registration.component'
import { AuthorizationComponent } from './Authorization/authorization.component';
import { BaseComponent } from './base.component';
import { HttpModule }   from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { AlertComponent } from './StatusAuth/status.component';
import { AlertService} from './StatusAuth/status.service';
import { NewsService } from './AppComponent/news.service';
import {AuthService } from './Authorization/auth-service.service';
import { AuthGuard } from './Authorization/auth.guard';
import { FollowAuthService } from './Authorization/follow-auth.service';
import { HeaderComponent } from './Header/header.component';


const appRoutes: Routes = [
    { path: '', component: AppComponent,canActivate: [AuthGuard]},
    { path: 'login', component: AuthorizationComponent},
    { path: 'registration', component: RegistrationComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, BaseComponent, RegistrationComponent, AuthorizationComponent, AlertComponent,HeaderComponent ],
    bootstrap:    [ BaseComponent ],
    providers: [ AlertComponent, AlertService, NewsService, AuthService, AuthGuard, FollowAuthService ],
})
export class AppModule { }