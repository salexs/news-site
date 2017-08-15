import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { ModalModule } from 'ngx-bootstrap';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { ReactiveFormsModule } from '@angular/forms';

import { Profile } from './Components/Profile/profile.component';
import { NewsListComponent }   from './Components/News/news-list.component';
import { Pagination } from './Components/Pagination/pagination.component'
import { RegistrationComponent } from './Components/Registration/registration.component';
import { AuthorizationComponent } from './Components/Authorization/authorization.component';
import { BaseComponent } from './Components/Base/base.component';
import { AlertComponent } from './Components/Status/status.component';
import { HeaderComponent } from './Components/Header/header.component';
import { DemoModalServiceFromComponent, ModalContentComponent} from './Components/CreateNewsModal/create-news-modal.component';
import { EditModalServiceFromComponent, EditModalContentComponent} from './Components/EditProfileModal/edit-profile-modal.component';
import { FilterComponent } from './Components/filter/filter.component';
import { SearchComponent } from './Components/search/search.component';

import { AlertService} from './Service/status.service';
import { NewsService } from './Service/news.service';
import { AuthServices } from './Service/auth-service.service';
import { AuthGuard, LogOutGuard } from './Service/auth.guard';
import { FollowAuthService } from './Service/follow-auth.service';
import { ProfileService } from './Service/get-profile.service';
import { ChangeProfileService } from './Service/change-profile.service';
import { FilterService } from './Service/subjects.service';




let providers = {
    "google": {
      "clientId": "480176923772-v03uiebg10f4rl9gh4k208vv6ij9ac8t.apps.googleusercontent.com"
    },
  };

const appRoutes: Routes = [
    { path: '', component: NewsListComponent, canActivate: [AuthGuard]},
    { path: 'login', component: AuthorizationComponent,canActivate: [LogOutGuard]},
    { path: 'registration', component: RegistrationComponent },
    { path: ':username', component: Profile },
];

@NgModule({
    imports:      [ BrowserModule,FormsModule, HttpModule, RouterModule.forRoot(appRoutes), Angular2SocialLoginModule,ModalModule.forRoot(),FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),ReactiveFormsModule ],
    declarations: [ NewsListComponent,EditModalServiceFromComponent, EditModalContentComponent, BaseComponent, RegistrationComponent, AuthorizationComponent, AlertComponent, HeaderComponent, Profile,DemoModalServiceFromComponent,ModalContentComponent,Pagination, FilterComponent, SearchComponent,],
    bootstrap:    [ BaseComponent ],
    entryComponents: [ModalContentComponent,EditModalContentComponent],
    providers: [ AlertComponent,ModalContentComponent,EditModalContentComponent,FilterService, ChangeProfileService, AlertService, NewsService, AuthServices, AuthGuard,LogOutGuard, FollowAuthService, ProfileService ],
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);