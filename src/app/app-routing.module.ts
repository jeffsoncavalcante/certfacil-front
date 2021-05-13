import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendancelistComponent } from './pages/attendancelist/attendancelist.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { ConfirmSenhaComponent } from './pages/confirm-senha/confirm-senha.component';
import { CreateeventComponent } from './pages/createevent/createevent.component';
import { EventComponent } from './pages/event/event.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { MyeventsComponent } from './pages/myevents/myevents.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { PdfComponent } from './shared/pdf/pdf.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { RegisterComponent } from './pages/register/register.component';
import { ValidaPasswordComponent } from './pages/valida-password/valida-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'certifcate', component: CertificateComponent },
  { path: 'attendancelist', component: AttendancelistComponent },
  { path: 'createevent', component: CreateeventComponent },
  { path: 'event', component: EventComponent },
  { path: 'myevents', component: MyeventsComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'validpassword', component: ValidaPasswordComponent },
  { path: 'newpassword', component: ConfirmSenhaComponent },
  { path: 'pdf', component: PdfComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
