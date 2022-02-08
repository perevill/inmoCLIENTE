import { IPageCiudad } from './../../model/ciudad-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PaginationService } from 'src/app/service/pagination.service';

import { IPageUsuario, IUsuario } from 'src/app/model/usuario-interfaces';
import { ICiudad } from 'src/app/model/ciudad-interfaces';
import { CiudadService } from 'src/app/service/ciudad.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-plist-usuario',
  templateUrl: './plist-usuario.component.html',
  styleUrls: ['./plist-usuario.component.css'],
})

export class PlistUsuarioComponent implements OnInit {
  @Input() id_tipousuario: number = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();
  //@ContentChild(TemplateRef) toolTemplate: TemplateRef<any>;

  strEntity: string = "usuario"
  strOperation: string = "plist"
  strTitleSingular: string = "Usuario";
  strTitlePlural: string = "Usuarios";
  aUsuarios: IUsuario[];
  nTotalElements: number;
  totalPages: number;
  page: number;
  barraPaginacion: string[];
  pageSize: number = 10;
  id2ShowViewModal: number = 0;
  strUsuarioSession: string;
  strResult: string = null;
  strFilter: string = "";
  currentSortField: string = "";
  currentSortDirection: string = "";

  strFilteredMessage: string = "";
  subjectFiltro$ = new Subject();

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oPaginationService: PaginationService,
    private oPostService: UsuarioService,
    private oActivatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subjectFiltro$.pipe(
      debounceTime(1000)
    ).subscribe(() => this.getPage());
    this.page = 1;
    this.getPage();
  }

  getPage = () => {
    if (this.id_tipousuario) {
      this.oPostService.getPageFiltered(this.pageSize, this.page, this.currentSortField, this.currentSortDirection, this.strFilter, this.id_tipousuario).subscribe((oPage: IPageUsuario) => {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por el tipo de usuario " + this.id_tipousuario + " y por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado filtrado por el tipo de usuario " + this.id_tipousuario;
        }
        this.aUsuarios = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.totalPages = oPage.totalPages;
        this.barraPaginacion = this.oPaginationService.pagination(this.totalPages, this.page);
      })
    } else {
      this.oPostService.getPage(this.pageSize, this.page, this.currentSortField, this.currentSortDirection, this.strFilter).subscribe((oPage: IPageUsuario) => {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado NO filtrado";
        }
        this.aUsuarios = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.totalPages = oPage.totalPages;
        this.barraPaginacion = this.oPaginationService.pagination(this.totalPages, this.page);
        console.log(oPage);
      })
    }
  }

  jumpToPage = () => {
    this.getPage();
    return false;
  }

  onKeyUpFilter(event: KeyboardEvent): void {
    this.subjectFiltro$.next();
  }

  doFilter() {
    this.getPage();
  }

  doResetFilter() {
    this.strFilter = "";
    this.getPage();
  }

  doResetOrder() {
    this.currentSortField = "";
    this.currentSortDirection = "";
    this.getPage();
  }

  doSetOrder(order: string) {
    this.currentSortField = order;
    if (this.currentSortDirection == 'asc') {
      this.currentSortDirection = 'desc';
    } else if (this.currentSortDirection == 'desc') {
      this.currentSortDirection = '';
    } else {
      this.currentSortDirection = 'asc';
    }
    this.getPage();
  }


}