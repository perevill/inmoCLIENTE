import { CiudadService } from './../../service/ciudad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { ICiudad } from 'src/app/model/ciudad-interfaces';
import { ITipoVivienda } from 'src/app/model/tipovivienda-interfaces';
import { TipoViviendaService } from 'src/app/service/tipovivienda.service';

@Component({
  selector: 'app-view-tipovivienda',
  templateUrl: './view-tipovivienda.component.html',
  styleUrls: ['./view-tipovivienda.component.css'],
})
export class ViewTipoViviendaComponent implements OnInit {

  strEntity: string = "tipovivienda"
  strOperation: string = "view"
  strTitleSingular: string = "Tipo de vivienda";
  strTitlePlural: string = "Tipos de vivienda";
  id: number = 0;
  oTipoVivienda: ITipoVivienda;
  oUserSession: IUsuario;

  constructor(
    private oTipoViviendaService: TipoViviendaService,
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
    this.oTipoViviendaService
      .getOne(this.id)
      .subscribe((oData: ITipoVivienda) => {
        this.oTipoVivienda = oData;
      });
  };

  goBack() {
    this.oLocation.back();
  }
}
