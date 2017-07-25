import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {AuthHttp, AuthConfig, JwtHelper} from "angular2-jwt/angular2-jwt";

import { AppComponent }  from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {Auth} from './services/auth.service';


@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    appRoutingProviders,AUTH_PROVIDERS,
    Auth]
})
export class AppModule { }


