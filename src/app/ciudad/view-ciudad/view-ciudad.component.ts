import { CiudadService } from './../../service/ciudad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { ICiudad } from 'src/app/model/ciudad-interfaces';

@Component({
  selector: 'app-view-ciudad',
  templateUrl: './view-ciudad.component.html',
  styleUrls: ['./view-ciudad.component.css'],
})
export class ViewCiudadComponent implements OnInit {

  strEntity: string = "ciudad"
  strOperation: string = "view"
  strTitleSingular: string = "Ciudad";
  strTitlePlural: string = "Ciudades";
  id: number = 0;
  oCiudad: ICiudad;
  oUserSession: IUsuario;

  constructor(
    private oCiudadService: CiudadService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
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

  getOne = () => {
    this.oCiudadService
      .getOne(this.id)
      .subscribe((oData: ICiudad) => {
        this.oCiudad = oData;
      });
  };

  goBack() {
    this.oLocation.back();
  }
}
