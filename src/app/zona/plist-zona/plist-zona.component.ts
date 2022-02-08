import { IPageCiudad } from './../../model/ciudad-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PaginationService } from 'src/app/service/pagination.service';

import { IUsuario } from 'src/app/model/usuario-interfaces';
import { ICiudad } from 'src/app/model/ciudad-interfaces';
import { CiudadService } from 'src/app/service/ciudad.service';
import { IPageZona, IZona } from 'src/app/model/zona-interfaces';
import { ZonaService } from 'src/app/service/zona.service';

@Component({
  selector: 'app-plist-zona',
  templateUrl: './plist-zona.component.html',
  styleUrls: ['./plist-zona.component.css'],
})

export class PlistZonaComponent implements OnInit {
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();
  //@ContentChild(TemplateRef) toolTemplate: TemplateRef<any>;

  strEntity: string = 'zona';
  strOperation: string = 'plist';
  strTitleSingular: string = 'Zona';
  strTitlePlural: string = 'Zonas';
  aZonas: IZona[];
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
    private oZonaService: ZonaService,
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
    this.oZonaService
      .getPage(
        this.pageSize,
        this.page,
        this.strFilter,
        this.currentSortField,
        this.currentSortDirection
      )
      .subscribe((oPage: IPageZona) => {
        if (this.strFilter) {
          this.strFilteredMessage = 'Listado filtrado por ' + this.strFilter;
        } else {
          this.strFilteredMessage = 'Listado NO filtrado';
        }
        this.aZonas = oPage.content;
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
