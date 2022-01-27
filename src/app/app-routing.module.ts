import { PlistCiudadComponent } from './ciudad/plist-ciudad/plist-ciudad.component';
import { CreateCiudadComponent } from './ciudad/create-ciudad/create-ciudad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SessionResolver } from './resolve/session.resolve';
import { EditCiudadComponent } from './ciudad/edit-ciudad/edit-ciudad.component';
import { ViewCiudadComponent } from './ciudad/view-ciudad/view-ciudad.component';
import { DeleteCiudadComponent } from './ciudad/delete-ciudad/delete-ciudad.component';
import { CreateComarcaComponent } from './comarca/create-comarca/create-comarca.component';
import { EditComarcaComponent } from './comarca/edit-comarca/edit-comarca.component';
import { PlistComarcaComponent } from './comarca/plist-comarca/plist-comarca.component';
import { ViewComarcaComponent } from './comarca/view-comarca/view-comarca.component';
import { DeleteComarcaComponent } from './comarca/delete-comarca/delete-comarca.component';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { message: SessionResolver } },
  { path: 'home', component: HomeComponent, resolve: { message: SessionResolver } },
  { path: 'login', component: LoginComponent, resolve: { message: SessionResolver } },
  { path: 'logout', component: LogoutComponent, resolve: { message: SessionResolver } },
  //Ciudad component
  { path: 'ciudad/create', component: CreateCiudadComponent, resolve: { message: SessionResolver } },
  { path: 'ciudad/edit/:id', component: EditCiudadComponent, resolve: { message: SessionResolver } },
  { path: 'ciudad/plist', component: PlistCiudadComponent, resolve: { message: SessionResolver } },
  { path: 'ciudad/view/:id', component: ViewCiudadComponent, resolve: { message: SessionResolver } },
  { path: 'ciudad/delete/:id', component: DeleteCiudadComponent, resolve: { message: SessionResolver } },
  //Comarca component
  { path: 'comarca/create', component: CreateComarcaComponent, resolve: { message: SessionResolver } },
  { path: 'comarca/edit/:id', component: EditComarcaComponent, resolve: { message: SessionResolver } },
  { path: 'comarca/plist', component: PlistComarcaComponent, resolve: { message: SessionResolver } },
  { path: 'comarca/view/:id', component: ViewComarcaComponent, resolve: { message: SessionResolver } },
  { path: 'comarca/delete/:id', component: DeleteComarcaComponent, resolve: { message: SessionResolver } },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
