import { ZonaService } from 'src/app/service/zona.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IPageTipoVivienda, ITipoVivienda } from 'src/app/model/tipovivienda-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { IUserType } from 'src/app/model/tipousuario-interfaces';
import { IVivienda2Send } from 'src/app/model/vivienda-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { Location } from '@angular/common';
import { ViviendaService } from 'src/app/service/vivienda.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IZona } from 'src/app/model/zona-interfaces';
import { TipoViviendaService } from 'src/app/service/tipovivienda.service';


@Component({
  selector: 'app-create-vivienda',
  templateUrl: './create-vivienda.component.html',
  styleUrls: ['./create-vivienda.component.css']
})
export class CreateViviendaComponent implements OnInit {
  Vivienda: IVivienda2Send = null;
  id: number = 0;
  oForm: FormGroup = null;
  strResult: string = '';
  idnuevo: number;
  strEntity: string = "Vivienda"
  strOperation: string = "create"
  strTitleSingular: string = "Vivienda";
  strTitlePlural: string = "Viviendas";
    usuario: IUsuario;
  aTipoVivienda: IPageTipoVivienda;
  comprar: boolean = false;
  alquilar: boolean = false;
  obranueva: boolean = false;


  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oViviendaService: ViviendaService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    private oUsuarioService: UsuarioService,
    private oZonaService: ZonaService,
    private oTipoViviendaService: TipoViviendaService
    
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      const strUsuarioSession: string =
        this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(strUsuarioSession));
      this.usuario = JSON.parse(localStorage.getItem('user'));
    console.log(this.usuario); 
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      ubicacion: ['', [Validators.required, Validators.minLength(5)]],
      precio: ['', [Validators.required, Validators.minLength(1)]],
      m2utiles: ['', [Validators.required, Validators.minLength(1)]],
      m2construidos: ['', [Validators.required, Validators.minLength(1)]],
      habitaciones: ['', [Validators.required, Validators.minLength(1)]],
      antiguedad: ['',],
      nplanta: ['', ],
      conservacion: ['', ],
      exterior: ['', ],
      descripcion: ['', [Validators.required, Validators.minLength(5)]],
      idzona: ['', [Validators.required, Validators.minLength(1)]],
      idanunciante: [this.usuario.id, [Validators.required, Validators.maxLength(1)]],
      idtipovivienda: ['', [Validators.required, Validators.maxLength(1)]],
      tipoventa: ['',]


    });
  }

  onSubmit(): void {
    if (this.oForm) {
      console.log(this.oForm.value.tipoventa);
      if(this.oForm.value.tipoventa == "comprar"){
        this.comprar = true;
      }
      if(this.oForm.value.tipoventa == "alquilar"){
        this.alquilar = true;
      }
      if(this.oForm.value.tipoventa == "obranueva"){
        this.obranueva = true;
      }
      this.Vivienda = {
        id: null,
        ubicacion: this.oForm.value.ubicacion,
        precio: this.oForm.value.precio,
        m2utiles: this.oForm.value.m2utiles,
        m2construidos: this.oForm.value.m2construidos,
        habitaciones: this.oForm.value.habitaciones,
        antiguedad: this.oForm.value.antiguedad,

        nplanta: this.oForm.value.nplanta,
        exterior: this.oForm.value.exterior,
        conservacion: this.oForm.value.conservacion,
        descripcion: this.oForm.value.descripcion,
        anunciante:{
          id:this.oForm.value.idanunciante
        },
        zona:{
          id:this.oForm.value.idzona
        },
        tipovivienda:{
          id:this.oForm.value.idtipovivienda
        },
        comprar:this.comprar ,
        obranueva: this.obranueva,
        alquilar: this.alquilar,


      };
      this.new();
    }
  }

  new = (): void => {
    console.log(this.Vivienda);
    this.oViviendaService.newOne(this.Vivienda).subscribe((id: any) => {
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
  fila: IUserType;
  id_tipousuario: number = null;
  showingModal: boolean = false;
  dataToShow: IUserType = null;
  zonaToShow: IZona = null;
  tipoToShow: ITipoVivienda = null;
  eventsSubjectShowModal: Subject<void> = new Subject<void>();
  eventsSubjectHideModal: Subject<void> = new Subject<void>();

  openModal(): void {
    this.eventsSubjectShowModal.next();
    this.showingModal = true;
  }

  onCloseModal(): void {
    //this.oRouter.navigate(['factura/view/' + this.id]);
  }

  closeModal(): void {
    this.eventsSubjectHideModal.next();
    this.showingModal = false;
  }

  onSelection($event: any) {
    console.log("edit evento recibido: " + $event)
    this.oForm.controls['tusuario'].setValue($event);
  }

  onChangeZona($event: any) {

    console.log("--->" + this.oForm.controls['idzona'].value);
    this.oForm.controls['idzona'].markAsDirty();

    //aqui cerrar la ventana emergente 
    if (this.showingModal) {
      this.closeModal();
    }

    //actualizar el tipo usuario
    this.oZonaService
      .getOne(this.oForm.controls['idzona'].value)
      .subscribe((oData: IZona) => {
        this.zonaToShow = oData;
        console.log(this.zonaToShow)
        //this.oUsuario = oData;
      });

    return false;
  }
  
  onChangeTipo($event: any) {

    console.log("--->" + this.oForm.controls['idtipovivienda'].value);
    this.oForm.controls['idtipovivienda'].markAsDirty();

    //aqui cerrar la ventana emergente 
    if (this.showingModal) {
      this.closeModal();
    }

    //actualizar el tipo usuario
    this.oTipoViviendaService
      .getOne(this.oForm.controls['idtipovivienda'].value)
      .subscribe((oData: ITipoVivienda) => {
        this.tipoToShow = oData;
        console.log(this.tipoToShow)
        //this.oUsuario = oData;
      });

    return false;
  }


  onChangeAnunciante($event: any) {

    console.log("--->" + this.oForm.controls['idanunciante'].value);
    this.oForm.controls['idanunciante'].markAsDirty();

    //aqui cerrar la ventana emergente 
    if (this.showingModal) {
      this.closeModal();
    }

    //actualizar el tipo usuario
    this.oUsuarioService
      .getOne(this.oForm.controls['idanunciante'].value)
      .subscribe((oData: IUsuario) => {
        this.dataToShow = oData;
        console.log(this.dataToShow)
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