import { AuthGuard } from './shared/guard/auth.guard';
import { PdfComponent } from './shared/pdf/pdf.component';
import { HeadermenuComponent } from './shared/headermenu/headermenu.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
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
import { ModalModule } from 'ngx-bootstrap/modal';
import { ValidaPasswordComponent } from './pages/valida-password/valida-password.component';
import { ConfirmSenhaComponent } from './pages/confirm-senha/confirm-senha.component';
import { EditEventComponent } from './pages/edit-event/edit-event.component';
import { AngularFireStorageModule} from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire';
import { CampoControlErroComponent } from './shared/campo-control-erro/campo-control-erro.component';
import {UsersComponent} from  './pages/users/users.component';
import { GroupeventesComponent } from './pages/groupeventes/groupeventes.component'




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
    CertificateComponent,
    HeaderComponent,
    HeadermenuComponent,
    ValidaPasswordComponent,
    ConfirmSenhaComponent,
    PdfComponent,
    EditEventComponent,
    CampoControlErroComponent,
    UsersComponent,
    GroupeventesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SharedModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDh326TteE7nViH4hEXTXa_jmEtkEMTSRo",
      authDomain: "certapi-3ef12.firebaseapp.com",
      projectId: "certapi-3ef12",
      storageBucket: "certapi-3ef12.appspot.com",
      messagingSenderId: "789748669867",
      appId: "1:789748669867:web:3429383c3ffca24a4bc6ee"
    }),
    AngularFireStorageModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
