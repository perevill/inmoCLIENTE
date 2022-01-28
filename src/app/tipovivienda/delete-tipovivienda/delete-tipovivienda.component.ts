import { TipoViviendaService } from './../../service/tipovivienda.service';
import { ITipoVivienda } from './../../model/tipovivienda-interfaces';
import { ICiudad } from 'src/app/model/ciudad-interfaces';
import { CiudadService } from './../../service/ciudad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';

@Component({
  selector: 'app-delete-tipovivienda',
  templateUrl: './delete-tipovivienda.component.html',
  styleUrls: ['./delete-tipovivienda.component.css'],
})
export class DeleteTipoViviendaComponent implements OnInit {

  strEntity: string = "tipovivienda"
  strOperation: string = "view"
  strTitleSingular: string = "Tipo de vivienda"
  strTitlePlural: string = "Tipos de vivienda";
  id: number = 0;
  oTipoVivienda: ITipoVivienda;
  oUserSession: IUsuario;
  strResult: string = null;

  constructor(
    private oTipoViviendaService: TipoViviendaService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location,
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

  removeOne() {
    this.oTipoViviendaService.removeOne(this.id).subscribe((data: number) => {
      if (data) {
        this.strResult = this.strTitleSingular + ' con ID=' + this.id + ' ha sido borrado con éxito';
      } else {
        this.strResult = 'Error en el borrado de ' + this.strTitleSingular;
      }
      this.openPopup();
    });
  }

  goBack() {
    this._location.back();
  }

  //popup

  eventsSubjectShowPopup: Subject<void> = new Subject<void>();

  openPopup(): void {
    this.eventsSubjectShowPopup.next();
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
  }
}
