import { IPageCiudad } from './../../model/ciudad-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PaginationService } from 'src/app/service/pagination.service';

import { IUsuario } from 'src/app/model/usuario-interfaces';
import { ICiudad } from 'src/app/model/ciudad-interfaces';
import { CiudadService } from 'src/app/service/ciudad.service';
import { IPageTipoVivienda, ITipoVivienda } from 'src/app/model/tipovivienda-interfaces';
import { TipoViviendaService } from 'src/app/service/tipovivienda.service';

@Component({
  selector: 'app-plist-tipovivienda',
  templateUrl: './plist-tipovivienda.component.html',
  styleUrls: ['./plist-tipovivienda.component.css'],
})

export class PlistTipoViviendaComponent implements OnInit {
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();
  //@ContentChild(TemplateRef) toolTemplate: TemplateRef<any>;

  strEntity: string = 'tipovivienda';
  strOperation: string = 'plist';
  strTitleSingular: string = 'Tipo de vivienda';
  strTitlePlural: string = 'Tipos de vivienda';
  aTiposVivienda: ITipoVivienda[];
  nTotalElements: number;
  totalPages: number;
  page: number;
  barraPaginacion: string[];
  pageSize: number = 10;
  id2ShowViewModal: number = 0;
  strUsuarioSession: string;
  strResult: string = null;
  strFilter: string = '';
  currentSortField: string = '';
  currentSortDirection: string = '';
  strFilteredMessage: string = '';
  subjectFiltro$ = new Subject();
  usuario: IUsuario;

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oPaginationService: PaginationService,
    private oTipoViviendaService: TipoViviendaService,
    private oActivatedRoute: ActivatedRoute
  ) {
    this.usuario = JSON.parse(localStorage.getItem('user'));
    console.log(this.usuario);    
  }

  ngOnInit(): void {
    this.subjectFiltro$
      .pipe(debounceTime(1000))
      .subscribe(() => this.getPage());
    this.page = 1;
    this.getPage();
  }

  getPage = () => {
    this.oTipoViviendaService
      .getPage(
        this.pageSize,
        this.page,
        this.strFilter,
        this.currentSortField,
        this.currentSortDirection
      )
      .subscribe((oPage: IPageTipoVivienda) => {
        if (this.strFilter) {
          this.strFilteredMessage = 'Listado filtrado por ' + this.strFilter;
        } else {
          this.strFilteredMessage = 'Listado NO filtrado';
        }
        this.aTiposVivienda = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.totalPages = oPage.totalPages;
        this.barraPaginacion = this.oPaginationService.pagination(
          this.totalPages,
          this.page
        );
        console.log(oPage);
      });
  };

  jumpToPage = () => {
    this.getPage();
    return false;
  };

  onKeyUpFilter(event: KeyboardEvent): void {
    this.subjectFiltro$.next();
  }

  doFilter() {
    this.getPage();
  }

  doResetFilter() {
    this.strFilter = '';
    this.getPage();
  }

  doResetOrder() {
    this.currentSortField = '';
    this.currentSortDirection = '';
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

  onSelection(id: number) {
    console.log('selection plist emite ' + id);
    this.selection.emit(id);
  }
}
