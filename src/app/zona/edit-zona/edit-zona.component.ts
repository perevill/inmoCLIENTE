import { IComarca, IComarca2Send } from './../../model/comarca-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { CiudadService } from 'src/app/service/ciudad.service';
import { ComarcaService } from 'src/app/service/comarca.service';
import { ICiudad } from 'src/app/model/ciudad-interfaces';
import { IZona, IZona2Send } from 'src/app/model/zona-interfaces';
import { ZonaService } from 'src/app/service/zona.service';

declare let $: any;

@Component({
  selector: 'app-edit-zona',
  templateUrl: './edit-zona.component.html',
  styleUrls: ['./edit-zona.component.css']
})
export class EditZonaComponent implements OnInit {
  strEntity: string = "zona"
  strOperation: string = "edit"
  strTitleSingular: string = "Zona";
  strTitlePlural: string = "Zonas";

  oZona: IZona = null;
  oZona2Send: IZona2Send = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;

  get f() { return this.oForm?.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oZonaService: ZonaService,
    private oComarcaService: ComarcaService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oLocation: Location,

  ) {

    if (this.oActivatedRoute.snapshot.data.message) {
      const strUsuarioSession: string = this.oActivatedRoute.snapshot.data.message.login;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id
    this.get();

  }

  ngOnInit(): void {

 

  }

  get = (): void => {
    this.oZonaService.getOne(this.id).subscribe((oData: IZona) => {

      this.oZona = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oZona.id],
        nombre: [this.oZona.nombre, Validators.required],
        codpostal: [this.oZona.codpostal, Validators.required],
        comarca: [this.oZona.comarca.id, Validators.required],
      });
    })
  }

  onSubmit(): void {
    if (this.oForm) {
      
        this.oZona2Send = {
          id: this.oForm.value.id,
          nombre: this.oForm.value.nombre,
          comarca: {
            id: this.oForm.value.comarca
          },
          codpostal:this.oForm.value.codpostal
        }

        console.log(this.oZona2Send);
        this.update();
      
    }
  }

  update = (): void => {
    this.oZonaService.updateOne(this.oZona2Send).subscribe((result: IZona) => {
      if (result) {
        this.strResult = "La compra se ha modificado correctamente";
      } else {
        this.strResult = "Error en la modificación de la compra";
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



  closeModalComarca(): void {
    this.eventsSubjectHideModalComarca.next();
    this.showingModalComarca= false;
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
