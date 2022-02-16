import { IVivienda } from 'src/app/model/vivienda-interfaces';
import { formdata } from './../model/usuario-interfaces';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CiudadService } from '../service/ciudad.service';
import { ComarcaService } from '../service/comarca.service';
import { ZonaService } from '../service/zona.service';
import { IPageVivienda } from '../model/vivienda-interfaces';
import { ViviendaService } from '../service/vivienda.service';
import { ICiudad, IPageCiudad } from '../model/ciudad-interfaces';
import { IComarca, IPageComarca } from '../model/comarca-interfaces';
import { IPageZona, IZona } from '../model/zona-interfaces';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  usuario:IUsuario;
  ciudad: number;
  comarca: number;
  zona: number;
  accion: string;
  oformdata!: any;
 aViviendas:IVivienda[];
 oForm: FormGroup = null;

 aCiudades:ICiudad[];
  aComarcas:IComarca[];
  aZonas:IZona[];

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter:Router,
    private oActivatedRoute:ActivatedRoute,
    private oCiudadService: CiudadService,
    private oComarcaService: ComarcaService,
    private oZonaService: ZonaService,
    private oViviendaService: ViviendaService

  ) { 
    if (this.oActivatedRoute.snapshot.data.message) {
      const strUsuarioSession: string =
        this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(strUsuarioSession));
      this.usuario = JSON.parse(localStorage.getItem('user'));
      

    console.log(this.usuario); 
    } else {
      localStorage.removeItem('user');
      
    }
   }

  ngOnInit(): void {
    this.oForm = new FormGroup({
      accion: new FormControl(''),
      ciudad: new FormControl(''),
      comarca: new FormControl(''),
      zona: new FormControl('')

    });
    this.oformdata=JSON.parse(localStorage.getItem('formdata'))
    this.accion=this.oformdata.accion;
    this.ciudad=this.oformdata.ciudad;
    this.comarca=this.oformdata.comarca;
    this.comarca=this.oformdata.comarca;
    this.getPage()
    
  }

  getPage = () => {
    console.log(this.accion);
    this.oViviendaService
      .getBusqueda(
        this.accion,
        this.ciudad,
        this.comarca,
        this.zona
        
      )
      .subscribe((oPage: IPageVivienda) => {
        
        this.aViviendas = oPage.content;
        
       
       
        console.log(oPage);
      });
  };

  

  getPageCiudad = () => {
    this.oCiudadService
      .getPage(
        50,
        1,
        "",
        "",
        "",
      )
      .subscribe((oPage: IPageCiudad) => {
       
        this.aCiudades = oPage.content;
        
        console.log(oPage);
      });
  };

  getComarcas = () => {
    console.log(this.ciudad);
    
    this.oComarcaService
      .getPagebyCiudad(
        this.ciudad
      )
      .subscribe((oPage: IPageComarca) => {
       
        this.aComarcas= oPage.content;
        
        console.log(this.aComarcas);
      });
  };
  onSubmit(): void {

    if (this.oForm) {
        this.accion=this.oForm.value.accion;
        this.ciudad=this.oForm.value.ciudad;
        this.comarca=this.oForm.value.comarca;
        this.zona=this.oForm.value.zona;

        localStorage.setItem("formdata",JSON.stringify(this.oForm.value));
      
    }
    this.getPage;
  }

  getZonas = () => {
    console.log(this.ciudad);
    
    this.oZonaService
      .getPagebyComarca(
        this.ciudad
      )
      .subscribe((oPage: IPageZona) => {
       
        this.aZonas= oPage.content;
        
        console.log(this.aZonas);
      });
  };

}
