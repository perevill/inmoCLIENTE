import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { IUsuario } from 'src/app/model/usuario-interfaces';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-view-usuario',
  templateUrl: './view-usuario.component.html',
  styleUrls: ['./view-usuario.component.css']
})
export class ViewUsuarioComponent implements OnInit {

  strEntity: string = "usuario"
  strOperation: string = "view"
  strTitleSingular: string = "Usuario";
  strTitlePlural: string = "Usuarios";
  id: number = 0;
  oUsuario: IUsuario;
  oUserSession: IUsuario;

  constructor(
    private oUsuarioService: UsuarioService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oLocation: Location,
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;
    this.getOne();
  }

  ngOnInit(): void { }

  getOne = () => {
    this.oUsuarioService
      .getOne(this.id)
      .subscribe((oData: IUsuario) => {
        this.oUsuario = oData;
      });
  };

  goBack() {
    this.oLocation.back();
  }
}
