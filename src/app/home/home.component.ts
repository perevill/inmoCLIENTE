import { IComarca, IPageComarca } from 'src/app/model/comarca-interfaces';
import { ICiudad } from 'src/app/model/ciudad-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IPageCiudad } from '../model/ciudad-interfaces';
import { IUsuario } from '../model/usuario-interfaces';
import { CiudadService } from '../service/ciudad.service';
import { ComarcaService } from '../service/comarca.service';
import { IPageZona, IZona } from '../model/zona-interfaces';
import { ZonaService } from '../service/zona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: IUsuario;
  aCiudades:ICiudad[];
  aComarcas:IComarca[];
  aZonas:IZona[];
  oForm: FormGroup = null;
  
  ciudad:number ;
  comarca:number;

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter:Router,
    private oActivatedRoute:ActivatedRoute,
    private oCiudadService: CiudadService,
    private oComarcaService: ComarcaService,
    private oZonaService: ZonaService
    
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      const strUsuarioSession: string =
        this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(strUsuarioSession));
      this.usuario = JSON.parse(localStorage.getItem('user'));
    console.log(this.usuario); 
    } else {
      localStorage.removeItem('user');
      oRouter.navigate(['/home']);
    }
   }

  ngOnInit(): void {
    this.getPage();
    this.oForm = new FormGroup({
      accion: new FormControl(''),
      ciudad: new FormControl(''),
      comarca: new FormControl(''),
      zona: new FormControl('')

    });

   
  }

  onSubmit(): void {

    if (this.oForm) {
  
        localStorage.setItem("formdata",JSON.stringify(this.oForm.value));
      
    }
  }

  getPage = () => {
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
