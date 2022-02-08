import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { ComarcaService } from 'src/app/service/comarca.service';
import { IZona } from 'src/app/model/zona-interfaces';
import { ZonaService } from 'src/app/service/zona.service';

@Component({
  selector: 'app-view-zona',
  templateUrl: './view-zona.component.html',
  styleUrls: ['./view-zona.component.css'],
})
export class ViewZonaComponent implements OnInit {

  strEntity: string = "zona"
  strOperation: string = "view"
  strTitleSingular: string = "Zona";
  strTitlePlural: string = "Zonas";
  id: number = 0;
  oZona: IZona;
  oUserSession: IUsuario;

  constructor(
    private oZonaService: ZonaService,
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
    this.oZonaService
      .getOne(this.id)
      .subscribe((oData: IZona) => {
        this.oZona = oData;
        console.log(this.oZona)
      });
  };

  goBack() {
    this.oLocation.back();
  }
}
