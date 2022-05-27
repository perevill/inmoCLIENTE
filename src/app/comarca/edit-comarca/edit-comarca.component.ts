import { IComarca, IComarca2Send } from './../../model/comarca-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { CiudadService } from 'src/app/service/ciudad.service';
import { ComarcaService } from 'src/app/service/comarca.service';
import { ICiudad } from 'src/app/model/ciudad-interfaces';

declare let $: any;

@Component({
  selector: 'app-edit-comarca',
  templateUrl: './edit-comarca.component.html',
  styleUrls: ['./edit-comarca.component.css']
})
export class EditComarcaComponent implements OnInit {
  strEntity: string = "comarca"
  strOperation: string = "edit"
  strTitleSingular: string = "Comarca";
  strTitlePlural: string = "Comarcas";

  oComarca: IComarca = null;
  oComarca2Send: IComarca2Send = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;

  get f() { return this.oForm?.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oComarcaService: ComarcaService,
    private oCiudadService: CiudadService,
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
    this.oComarcaService.getOne(this.id).subscribe((oData: IComarca) => {

      this.oComarca = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oComarca.id],
        nombre: [this.oComarca.nombre, Validators.required],
        
        ciudad: [this.oComarca.ciudad.id, Validators.required],
      });
    })
  }

  onSubmit(): void {
    if (this.oForm) {
      
        this.oComarca2Send = {
          id: this.oForm.value.id,
          nombre: this.oForm.value.nombre,
         
          ciudad: {
            id: this.oForm.value.ciudad
          },
          
        }

        console.log(this.oComarca2Send);
        this.update();
      
    }
  }

  update = (): void => {
    this.oComarcaService.updateOne(this.oComarca2Send).subscribe((result: IComarca) => {
      if (result) {
        this.strResult = "La comarca se ha modificado correctamente";
      } else {
        this.strResult = "Error en la modificación de la comarca";
      }
      this.openPopup();
    })
  }

  goBack(): void {
    this.oLocation.back();
  }

  //modal

  id_usuario: number = null;
  showingModalCiudad: boolean = false;



  eventsSubjectShowModalCiudad: Subject<void> = new Subject<void>();
  eventsSubjectHideModalCiudad: Subject<void> = new Subject<void>();




  openModalCiudad(): void {
    this.eventsSubjectShowModalCiudad.next();
    this.showingModalCiudad = true;
  }



  closeModalCiudad(): void {
    this.eventsSubjectHideModalCiudad.next();
    this.showingModalCiudad= false;
  }



  onSelectionCiudad($event: any) {
    console.log("edit evento recibido: " + $event)
    this.oForm.controls['ciudad'].setValue($event);
  }

 

  onChangeCiudad($event: any) {

    console.log("--->" + this.oForm.controls['ciudad'].value);
    this.oForm.controls['ciudad'].markAsDirty();

    //aqui cerrar la ventana emergente 
    if (this.showingModalCiudad) {
      this.closeModalCiudad();
    }

    //actualizar el usuario
    this.oCiudadService
      .getOne(this.oForm.controls['ciudad'].value)
      .subscribe((oData: ICiudad) => {
        this.oComarca.ciudad = oData;
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
