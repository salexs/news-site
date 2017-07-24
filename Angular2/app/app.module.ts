import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './AppComponent/app.component';
import { RegistrationComponent } from './Registration/registration.component'
import { AuthorizationComponent } from './Authorization/authorization.component';
import { HttpModule }   from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes =[
    { path: '', component: AppComponent},
    { path: 'login', component: AuthorizationComponent},
    { path: 'registration', component: RegistrationComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, RegistrationComponent, AuthorizationComponent ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }