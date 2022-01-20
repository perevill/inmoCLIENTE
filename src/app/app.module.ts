import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './usuario/edit/usuario-edit.component';
import { CreateComponent } from './usuario/create/usuario-create.component';
import { DeleteComponent } from './usuario/delete/usuario-delete.component';
import { PlistComponent } from './usuario/plist/usuario-plist.component';
import { ViewComponent } from './usuario/view/usuario-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    CreateComponent,
    DeleteComponent,
    PlistComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
