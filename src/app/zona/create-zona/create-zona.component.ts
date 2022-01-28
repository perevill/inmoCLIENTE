import { IZona, IZona2Send } from './../../model/zona-interfaces';
import { ICiudad } from 'src/app/model/ciudad-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IComarca, IComarca2Send } from 'src/app/model/comarca-interfaces';
import { ComarcaService } from 'src/app/service/comarca.service';
import { CiudadService } from 'src/app/service/ciudad.service';
import { ZonaService } from 'src/app/service/zona.service';

declare let $: any;
@Component({
  selector: 'app-create-zona',
  templateUrl: './create-zona.component.html',
  styleUrls: ['./create-zona.component.css']
})
export class CreateZonaComponent implements OnInit {

  strEntity: string = "zona"
  strOperation: string = "create"
  strTitleSingular: string = "Zona";
  strTitlePlural: string = "Zonas";
  oZona: IZona2Send = null;
  id: IZona = null;
  oForm: FormGroup = null;
  strResult: string = "";
  oUserSession: IUsuario;

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oZonaService: ZonaService,
    private oActivatedRoute: ActivatedRoute,
    private oComarcaService: ComarcaService,
    private oRoute: ActivatedRoute,
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
      
      
      
      nombre: ['', Validators.required],
      comarca: ['', Validators.required],
      codpostal: ['', Validators.required],

    });
    
  }

  onSubmit(): void {

    if (this.oForm) {
  
        this.oZona = {
          id: null,
         
         nombre: this.oForm.value.nombre,
          comarca: {
            id: this.oForm.value.comarca,
          },
          codpostal: this.oForm.value.codpostal,

        }
        console.log(this.oZona);
        this.new();
      
    }
  }

  new = (): void => {
    this.oZonaService.newOne(this.oZona).subscribe((id: any) => {
      if (id) {
        this.id = JSON.parse(JSON.stringify(id));

        this.strResult = "La "+this.strEntity +" se ha creado correctamente";
      } else {
        this.strResult = "Error en la creación de la "+this.strEntity;
      }

      this.openPopup();
    })
  }

  goBack(): void {
    this.oLocation.back();
  }

  //modal

  id_usuario: number = null;
  showingModalComarca: boolean = false;



  eventsSubjectShowModalComarca: Subject<void> = new Subject<void>();
  eventsSubjectHideModalComarca: Subject<void> = new Subject<void>();

  
  openModalComarca(): void {
    this.eventsSubjectShowModalComarca.next();
    this.showingModalComarca = true;
  }

  onCloseModal(): void {
    //this.oRouter.navigate(['factura/view/' + this.id]);
  }



  closeModalComarca(): void {
    this.eventsSubjectHideModalComarca.next();
    this.showingModalComarca = false;
  }



  onSelectionComarca($event: any) {
    console.log("edit evento recibido: " + $event)
    this.oForm.controls['comarca'].setValue($event);
  }



  onChangeComarca($event: any) {

    console.log("--->" + this.oForm.controls['comarca'].value);
    this.oForm.controls['comarca'].markAsDirty();

    //aqui cerrar la ventana emergente 
    if (this.showingModalComarca) {
      this.closeModalComarca();
    }

    //actualizar el usuario
    this.oComarcaService
      .getOne(this.oForm.controls['comarca'].value)
      .subscribe((oData: IComarca) => {
        this.oZona.comarca = oData;
        //this.oUsuario = oData;
      });

    return false;
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
