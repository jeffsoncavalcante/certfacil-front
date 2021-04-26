import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomemasterComponent } from './pages/homemaster/homemaster.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent},
 { path: 'homemaster', component: HomemasterComponent},
 { path: 'index', component: IndexComponent},
 { path: 'register', component: RegisterComponent},
 { path: 'recover', component: RecoverComponent},
 { path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
