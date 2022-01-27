import { ICiudad, ICiudad2Send } from './../../model/ciudad-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CiudadService } from 'src/app/service/ciudad.service';


declare let $: any;

@Component({
  selector: 'app-edit-ciudad',
  templateUrl: './edit-ciudad.component.html',
  styleUrls: ['./edit-ciudad.component.css'],
})
export class EditCiudadComponent implements OnInit {

  strEntity: string = "tipoproducto"
  strOperation: string = "edit"
  strTitleSingular: string = "Ciudad";
  strTitlePlural: string = "Ciudades";
  oCiudad2Send: ICiudad2Send = null;
  oCiudad2Show: ICiudad = null;
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
    private oCiudadService: CiudadService,
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
    this.oCiudadService
      .getOne(this.id)
      .subscribe((oData: ICiudad) => {
        this.oCiudad2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.oCiudad2Show.id],
          nombre: [
            this.oCiudad2Show.nombre,
            [Validators.required, Validators.minLength(5)],
          ],
        });
      });
  };

  onSubmit(): void {
    if (this.oForm) {
      this.oCiudad2Send = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre
      };
      this.update();
    }
  }

  update = (): void => {
    this.oCiudadService
      .updateOne(this.oCiudad2Send)
      .subscribe((oCiudad: ICiudad) => {
        if (oCiudad.id) {
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
