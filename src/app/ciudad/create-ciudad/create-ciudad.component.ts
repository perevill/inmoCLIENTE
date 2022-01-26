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
  selector: 'app-create-ciudad',
  templateUrl: './create-ciudad.component.html',
  styleUrls: ['./create-ciudad.component.css'],
})

export class CreateCiudadComponent implements OnInit {


  strEntity: string = "ciudad"
  strOperation: string = "create"
  strTitleSingular: string = "Ciudad";
  strTitlePlural: string = "Ciudades";
  oCiudad2Send: ICiudad2Send = null;
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
      this.oCiudad2Send = {
        id: null,
        nombre: this.oForm.value.nombre,
      
      };
      this.new();
    }
  }

  new = (): void => {
    this.oCiudadService
      .newOne(this.oCiudad2Send)
      .subscribe((oCiudad: ICiudad) => {
        if (oCiudad.id) {
          this.id = oCiudad.id;
          this.strResult = this.strTitleSingular + ' creado correctamente con id=' + oCiudad.id;
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
