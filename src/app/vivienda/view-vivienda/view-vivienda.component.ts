import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IVivienda } from 'src/app/model/vivienda-interfaces';
import { ViviendaService } from 'src/app/service/vivienda.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-vivienda',
  templateUrl: './view-vivienda.component.html',
  styleUrls: ['./view-vivienda.component.css']
})
export class ViewViviendaComponent implements OnInit {
  math = Math;

  strEntity: string = "vivienda"
  strOperation: string = "view"
  strTitleSingular: string = "Vivienda";
  strTitlePlural: string = "Viviendas";
  id: number = 0;
  oVivienda: IVivienda;
  oUserSession: IUsuario;

  constructor(
    private oViviendaService: ViviendaService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oLocation: Location,
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.removeItem('user');
      
    }

    this.id = this.oActivatedRoute.snapshot.params.id;
    this.getOne();
  }

  ngOnInit(): void { }

  getOne = () => {
    this.oViviendaService
      .getOne(this.id)
      .subscribe((oData: IVivienda) => {
        this.oVivienda = oData;
        
      });
  };

 

  goBack() {
    this.oLocation.back();
  }
}