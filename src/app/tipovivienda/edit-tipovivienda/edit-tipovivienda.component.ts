import { ICiudad, ICiudad2Send } from './../../model/ciudad-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CiudadService } from 'src/app/service/ciudad.service';
import { ITipoVivienda, ITipoVivienda2Send } from 'src/app/model/tipovivienda-interfaces';
import { TipoViviendaService } from 'src/app/service/tipovivienda.service';


declare let $: any;

@Component({
  selector: 'app-edit-tipovivienda',
  templateUrl: './edit-tipovivienda.component.html',
  styleUrls: ['./edit-tipovivienda.component.css'],
})
export class EditTipoViviendaComponent implements OnInit {

  strEntity: string = "tipovivienda"
  strOperation: string = "edit"
  strTitleSingular: string = "Tipo de vivienda";
  strTitlePlural: string = "Tipos de viviendaes";
  oTipoVivienda2Send: ITipoVivienda2Send = null;
  oTipoVivienda2Show: ITipoVivienda = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;
  oUserSession: IUsuario;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oTipoViviendaService: TipoViviendaService,
    private oActivatedRoute: ActivatedRoute,
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

  getOne = (): void => {
    this.oTipoViviendaService
      .getOne(this.id)
      .subscribe((oData: ITipoVivienda) => {
        this.oTipoVivienda2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.oTipoVivienda2Show.id],
          nombre: [
            this.oTipoVivienda2Show.nombre,
            [Validators.required, Validators.minLength(5)],
          ],
        });
      });
  };

  onSubmit(): void {
    if (this.oForm) {
      this.oTipoVivienda2Send = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre
      };
      this.update();
    }
  }

  update = (): void => {
    this.oTipoViviendaService
      .updateOne(this.oTipoVivienda2Send)
      .subscribe((oTipoVivienda: ITipoVivienda) => {
        if (oTipoVivienda.id) {
          this.strResult = this.strTitleSingular + ' modificado correctamente';
        } else {
          this.strResult = this.strTitleSingular + ': error en la modificación del registro';
        }
        this.openPopup();
      });
  };

  goBack(): void {
    this.oLocation.back();
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
