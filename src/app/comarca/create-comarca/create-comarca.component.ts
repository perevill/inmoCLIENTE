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

declare let $: any;
@Component({
  selector: 'app-create-comarca',
  templateUrl: './create-comarca.component.html',
  styleUrls: ['./create-comarca.component.css']
})
export class CreateComarcaComponent implements OnInit {

  strEntity: string = "comarca"
  strOperation: string = "create"
  strTitleSingular: string = "Comarca";
  strTitlePlural: string = "Comarcas";
  oComarca: IComarca2Send = null;
  id: IComarca = null;
  oForm: FormGroup = null;
  strResult: string = "";
  oUserSession: IUsuario;

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oComarcaService: ComarcaService,
    private oActivatedRoute: ActivatedRoute,
    private oCiudadService: CiudadService,
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
      ciudad: ['', Validators.required],
    });
    
  }

  onSubmit(): void {

    if (this.oForm) {
  
        this.oComarca = {
          id: null,
         
         nombre: this.oForm.value.nombre,
          ciudad: {
            id: this.oForm.value.ciudad,
          },
         
        }
        console.log(this.oComarca);
        this.new();
      
    }
  }

  new = (): void => {
    this.oComarcaService.newOne(this.oComarca).subscribe((id: any) => {
      if (id) {
        this.id = JSON.parse(JSON.stringify(id));

        this.strResult = "La compra se ha creado correctamente";
      } else {
        this.strResult = "Error en la creación de la compra";
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

  onCloseModal(): void {
    //this.oRouter.navigate(['factura/view/' + this.id]);
  }



  closeModalCiudad(): void {
    this.eventsSubjectHideModalCiudad.next();
    this.showingModalCiudad = false;
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
