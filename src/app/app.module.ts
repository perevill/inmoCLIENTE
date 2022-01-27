import { PopupComponent } from './popup/popup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditUsuarioComponent } from './usuario/edit-usuario/edit-usuario.component';
import { CreateUsuarioComponent } from './usuario/create-usuario/create-usuario.component';
import { DeleteUsuarioComponent } from './usuario/delete-usuario/delete-usuario.component';
import { ViewUsuarioComponent } from './usuario/view-usuario/view-usuario.component';
import { PlistUsuarioComponent } from './usuario/plist-usuario/plist-usuario.component';
import { CreateTipoviviendaComponent } from './tipovivienda/create-tipovivienda/create-tipovivienda.component';
import { ViewTipoviviendaComponent } from './tipovivienda/view-tipovivienda/view-tipovivienda.component';
import { DeleteTipoviviendaComponent } from './tipovivienda/delete-tipovivienda/delete-tipovivienda.component';
import { PlistTipoviviendaComponent } from './tipovivienda/plist-tipovivienda/plist-tipovivienda.component';
import { EditTipoviviendaComponent } from './tipovivienda/edit-tipovivienda/edit-tipovivienda.component';
import { CreateCiudadComponent } from './ciudad/create-ciudad/create-ciudad.component';
import { DeleteCiudadComponent } from './ciudad/delete-ciudad/delete-ciudad.component';
import { ViewCiudadComponent } from './ciudad/view-ciudad/view-ciudad.component';
import { EditZonaComponent } from './zona/edit-zona/edit-zona.component';
import { CreateZonaComponent } from './zona/create-zona/create-zona.component';
import { PlistZonaComponent } from './zona/plist-zona/plist-zona.component';
import { DeleteZonaComponent } from './zona/delete-zona/delete-zona.component';
import { ViewZonaComponent } from './zona/view-zona/view-zona.component';
import { EditComarcaComponent } from './comarca/edit-comarca/edit-comarca.component';
import { ViewComarcaComponent } from './comarca/view-comarca/view-comarca.component';
import { CreateComarcaComponent } from './comarca/create-comarca/create-comarca.component';
import { DeleteComarcaComponent } from './comarca/delete-comarca/delete-comarca.component';
import { PlistComarcaComponent } from './comarca/plist-comarca/plist-comarca.component';
import { EditFavoritosComponent } from './favoritos/edit-favoritos/edit-favoritos.component';
import { CreateFavoritosComponent } from './favoritos/create-favoritos/create-favoritos.component';
import { ViewFavoritosComponent } from './favoritos/view-favoritos/view-favoritos.component';
import { DeleteFavoritosComponent } from './favoritos/delete-favoritos/delete-favoritos.component';
import { PlistFavoritosComponent } from './favoritos/plist-favoritos/plist-favoritos.component';
import { EditViviendaComponent } from './vivienda/edit-vivienda/edit-vivienda.component';
import { CreateViviendaComponent } from './vivienda/create-vivienda/create-vivienda.component';
import { DeleteViviendaComponent } from './vivienda/delete-vivienda/delete-vivienda.component';
import { ViewViviendaComponent } from './vivienda/view-vivienda/view-vivienda.component';
import { PlistViviendaComponent } from './vivienda/plist-vivienda/plist-vivienda.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SessionResolver } from './resolve/session.resolve';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { EditCiudadComponent } from './ciudad/edit-ciudad/edit-ciudad.component';
import { PlistCiudadComponent } from './ciudad/plist-ciudad/plist-ciudad.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditUsuarioComponent,
    CreateUsuarioComponent,
    DeleteUsuarioComponent,
    ViewUsuarioComponent,
    PlistUsuarioComponent,
    CreateTipoviviendaComponent,
    ViewTipoviviendaComponent,
    DeleteTipoviviendaComponent,
    PlistTipoviviendaComponent,
    EditTipoviviendaComponent,
    EditCiudadComponent,
    CreateCiudadComponent,
    DeleteCiudadComponent,
    ViewCiudadComponent,
    PlistCiudadComponent,
    EditZonaComponent,
    CreateZonaComponent,
    PlistZonaComponent,
    DeleteZonaComponent,
    ViewZonaComponent,
    EditComarcaComponent,
    ViewComarcaComponent,
    CreateComarcaComponent,
    DeleteComarcaComponent,
    PlistComarcaComponent,
    EditFavoritosComponent,
    CreateFavoritosComponent,
    ViewFavoritosComponent,
    DeleteFavoritosComponent,
    PlistFavoritosComponent,
    EditViviendaComponent,
    CreateViviendaComponent,
    DeleteViviendaComponent,
    ViewViviendaComponent,
    PlistViviendaComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    PopupComponent,
    ModalComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SessionResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
