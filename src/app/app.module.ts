import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InstagramAuthenticationCallbackComponent } from './instagram-authentication-callback/instagram-authentication-callback.component';
import { Api } from './core/api';
import { TokenManagerService } from './core/token-manager.service';
import { AuthenticationService } from './instagram-authentication-callback/shared/authentication.service';
import { ProfileService } from './profile/shared/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ScheduleComponent,
    InstagramAuthenticationCallbackComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    Api,
    AuthenticationService,
    TokenManagerService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
