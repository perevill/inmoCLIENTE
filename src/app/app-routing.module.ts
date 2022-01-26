import { CreateCiudadComponent } from './ciudad/create-ciudad/create-ciudad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SessionResolver } from './resolve/session.resolve';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { message: SessionResolver } },
  { path: 'home', component: HomeComponent, resolve: { message: SessionResolver } },
  { path: 'login', component: LoginComponent, resolve: { message: SessionResolver } },
  { path: 'logout', component: LogoutComponent, resolve: { message: SessionResolver } },
  { path: 'ciudad/create', component: CreateCiudadComponent, resolve: { message: SessionResolver } },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
