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
import { NewsService } from './AppComponent/news.service'
import {AuthService} from './Authorization/auth-service.service'
const appRoutes: Routes =[
    { path: '', component: AppComponent},
    { path: 'login', component: AuthorizationComponent},
    { path: 'registration', component: RegistrationComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, BaseComponent, RegistrationComponent, AuthorizationComponent, AlertComponent ],
    bootstrap:    [ BaseComponent ],
    providers: [ AlertComponent, AlertService, NewsService, AuthService ],
})
export class AppModule { }