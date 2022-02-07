import { CreateUsuarioComponent } from './usuario/create-usuario/create-usuario.component';
import { UsuarioEditComponent } from './usuario/edit-usuario/edit-usuario.component';
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
import { CreateTipoViviendaComponent } from './tipovivienda/create-tipovivienda/create-tipovivienda.component';
import { CreateZonaComponent } from './zona/create-zona/create-zona.component';
import { EditTipoViviendaComponent } from './tipovivienda/edit-tipovivienda/edit-tipovivienda.component';
import { DeleteTipoViviendaComponent } from './tipovivienda/delete-tipovivienda/delete-tipovivienda.component';
import { PlistTipoViviendaComponent } from './tipovivienda/plist-tipovivienda/plist-tipovivienda.component';
import { ViewTipoViviendaComponent } from './tipovivienda/view-tipovivienda/view-tipovivienda.component';
import { DeleteZonaComponent } from './zona/delete-zona/delete-zona.component';
import { ViewZonaComponent } from './zona/view-zona/view-zona.component';
import { PlistZonaComponent } from './zona/plist-zona/plist-zona.component';
import { EditZonaComponent } from './zona/edit-zona/edit-zona.component';

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
  //Tipovivienda component
  { path: 'tipovivienda/create', component: CreateTipoViviendaComponent, resolve: { message: SessionResolver } },
  { path: 'tipovivienda/edit/:id', component: EditTipoViviendaComponent, resolve: { message: SessionResolver } },
  { path: 'tipovivienda/plist', component: PlistTipoViviendaComponent, resolve: { message: SessionResolver } },
  { path: 'tipovivienda/view/:id', component: ViewTipoViviendaComponent, resolve: { message: SessionResolver } },
  { path: 'tipovivienda/delete/:id', component: DeleteTipoViviendaComponent, resolve: { message: SessionResolver } },
  //Zona component
  { path: 'zona/create', component: CreateZonaComponent, resolve: { message: SessionResolver } },
  { path: 'zona/edit/:id', component: EditZonaComponent, resolve: { message: SessionResolver } },
  { path: 'zona/plist', component: PlistZonaComponent, resolve: { message: SessionResolver } },
  { path: 'zona/view/:id', component: ViewZonaComponent, resolve: { message: SessionResolver } },
  { path: 'zona/delete/:id', component: DeleteZonaComponent, resolve: { message: SessionResolver } },
//Usuario component
{ path: 'usuario/create', component: CreateUsuarioComponent, resolve: { message: SessionResolver } },
{ path: 'usuario/edit/:id', component: UsuarioEditComponent, resolve: { message: SessionResolver } },
{ path: 'zona/plist', component: PlistZonaComponent, resolve: { message: SessionResolver } },
{ path: 'zona/view/:id', component: ViewZonaComponent, resolve: { message: SessionResolver } },
{ path: 'zona/delete/:id', component: DeleteZonaComponent, resolve: { message: SessionResolver } },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
