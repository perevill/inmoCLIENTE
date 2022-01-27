import { IComarca } from './../../model/comarca-interfaces';
import { ICiudad } from 'src/app/model/ciudad-interfaces';
import { CiudadService } from './../../service/ciudad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { ComarcaService } from 'src/app/service/comarca.service';

@Component({
  selector: 'app-delete-comarca',
  templateUrl: './delete-comarca.component.html',
  styleUrls: ['./delete-comarca.component.css'],
})
export class DeleteComarcaComponent implements OnInit {

  strEntity: string = "comarca"
  strOperation: string = "view"
  strTitleSingular: string = "Comarca"
  strTitlePlural: string = "Comarcas";
  id: number = 0;
  oComarca: IComarca;
  oUserSession: IUsuario;
  strResult: string = null;

  constructor(
    private oComarcaService: ComarcaService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location,
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
      });
  };

  removeOne() {
    this.oComarcaService.removeOne(this.id).subscribe((data: number) => {
      if (data) {
        this.strResult = this.strTitleSingular + ' con ID=' + this.id + ' ha sido borrado con éxito';
      } else {
        this.strResult = 'Error en el borrado de ' + this.strTitleSingular;
      }
      this.openPopup();
    });
  }

  goBack() {
    this._location.back();
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
