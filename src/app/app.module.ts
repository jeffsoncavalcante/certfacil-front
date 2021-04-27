import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { CreateeventComponent } from './pages/createevent/createevent.component';
import { EventComponent } from './pages/event/event.component';
import { AttendancelistComponent } from './pages/attendancelist/attendancelist.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { MyeventsComponent } from './pages/myevents/myevents.component';
import { CertificateComponent } from './pages/certificate/certificate.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    RegisterComponent,
    RecoverComponent,
    HomeComponent,
    EventComponent,
    CreateeventComponent,
    AttendancelistComponent,
    MyprofileComponent,
    MyeventsComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
