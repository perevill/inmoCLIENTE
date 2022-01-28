import { TipoViviendaService } from './../../service/tipovivienda.service';
import { ITipoVivienda, ITipoVivienda2Send } from './../../model/tipovivienda-interfaces';
import { ICiudad, ICiudad2Send } from './../../model/ciudad-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CiudadService } from 'src/app/service/ciudad.service';

declare let $: any;

@Component({
  selector: 'app-create-tipovivienda',
  templateUrl: './create-tipovivienda.component.html',
  styleUrls: ['./create-tipovivienda.component.css'],
})

export class CreateTipoViviendaComponent implements OnInit {


  strEntity: string = "tipovivienda"
  strOperation: string = "create"
  strTitleSingular: string = "Tipo de vivienda";
  strTitlePlural: string = "Tipos de vivienda";
  oTipoVivienda2Send: ITipoVivienda2Send = null;
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
    private oLocation: Location,
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.oForm) {
      this.oTipoVivienda2Send = {
        id: null,
        nombre: this.oForm.value.nombre,
      
      };
      this.new();
    }
  }

  new = (): void => {
    this.oTipoViviendaService
      .newOne(this.oTipoVivienda2Send)
      .subscribe((oTipoVivienda: ITipoVivienda) => {
        if (oTipoVivienda.id) {
          this.id = oTipoVivienda.id;
          this.strResult = this.strTitleSingular + ' creado correctamente con id=' + oTipoVivienda.id;
        } else {
          this.strResult = this.strTitleSingular + ': error en la creación del registro';
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
