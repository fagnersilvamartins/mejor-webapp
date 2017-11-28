import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InstagramAuthenticationCallbackComponent } from './instagram-authentication-callback/instagram-authentication-callback.component';
import { Api } from './core/api';
import { AuthenticationService } from './instagram-authentication-callback/shared/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ScheduleComponent,
    InstagramAuthenticationCallbackComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    Api,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
