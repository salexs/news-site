import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { ModalModule } from 'ngx-bootstrap';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { ReactiveFormsModule } from '@angular/forms';

import { Profile } from './Components/profile.component';
import { NewsListComponent }   from './Components/news-list.component';
import { RegistrationComponent } from './Components/registration.component';
import { AuthorizationComponent } from './Components/authorization.component';
import { BaseComponent } from './Components/base.component';
import { AlertComponent } from './Components/status.component';
import { HeaderComponent } from './Components/header.component';
import { DemoModalServiceFromComponent,ModalContentComponent} from './Components/profile.component';

import { AlertService} from './Service/status.service';
import { NewsService } from './Service/news.service';
import { AuthServices } from './Service/auth-service.service';
import { AuthGuard } from './Service/auth.guard';
import { FollowAuthService } from './Service/follow-auth.service';
import { ProfileService } from './Service/get-profile.service';

let providers = {
    "google": {
      "clientId": "480176923772-v03uiebg10f4rl9gh4k208vv6ij9ac8t.apps.googleusercontent.com"
    },
  };

const appRoutes: Routes = [
    { path: '', component: NewsListComponent, canActivate: [AuthGuard]},
    { path: 'login', component: AuthorizationComponent},
    { path: 'registration', component: RegistrationComponent },
    { path: ':username', component: Profile },
];

@NgModule({
    imports:      [ BrowserModule,FormsModule, HttpModule, RouterModule.forRoot(appRoutes), Angular2SocialLoginModule,ModalModule.forRoot(),FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),ReactiveFormsModule ],
    declarations: [ NewsListComponent, BaseComponent, RegistrationComponent, AuthorizationComponent, AlertComponent, HeaderComponent, Profile,DemoModalServiceFromComponent,ModalContentComponent],
    bootstrap:    [ BaseComponent ],
    entryComponents: [ModalContentComponent],
    providers: [ AlertComponent,ModalContentComponent, AlertService, NewsService, AuthServices, AuthGuard, FollowAuthService, ProfileService ],
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);