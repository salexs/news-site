import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './AppComponent/app.component';
import { AuthorizationComponent } from './Authorization/authorization.component'
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AuthorizationComponent, AppComponent ],
    bootstrap:    [ AuthorizationComponent, AppComponent ]
})
export class AppModule { }