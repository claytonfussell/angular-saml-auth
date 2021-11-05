import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SsoComponent } from './sso/sso.component';
import { LoginComponent } from './login/login.component';
import { SiteComponent } from './site/site.component';

import {SsoService} from './services/sso.service';

@NgModule({
  declarations: [
    AppComponent,
    SsoComponent,
    LoginComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SsoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
