import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IComarca } from 'src/app/model/comarca-interfaces';
import { ComarcaService } from 'src/app/service/comarca.service';

@Component({
  selector: 'app-view-comarca',
  templateUrl: './view-comarca.component.html',
  styleUrls: ['./view-comarca.component.css'],
})
export class ViewComarcaComponent implements OnInit {

  strEntity: string = "comarca"
  strOperation: string = "view"
  strTitleSingular: string = "Comarca";
  strTitlePlural: string = "Comarcas";
  id: number = 0;
  oComarca: IComarca;
  oUserSession: IUsuario;

  constructor(
    private oComarcaService: ComarcaService,
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
    this.oComarcaService
      .getOne(this.id)
      .subscribe((oData: IComarca) => {
        this.oComarca = oData;
        console.log(this.oComarca)
      });
  };

  goBack() {
    this.oLocation.back();
  }
}
