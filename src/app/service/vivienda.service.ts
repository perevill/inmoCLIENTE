import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { API_URL, environment, httpOptions } from 'src/environments/environment';


import { catchError, retry, shareReplay, tap } from 'rxjs/operators';
import { IPageVivienda, IVivienda, IVivienda2Send } from '../model/vivienda-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {

  constructor(private http: HttpClient) { }

  sURL = API_URL + '/vivienda';

  getPage(
    rpp: number,
    page: number,
    filter: string,
    order: string,
    direction: string
  ): Observable<IPageVivienda> {
    let strUrl: string = '';
    if (filter) {
      strUrl += '&filter=' + filter;
    }
    if (order) {
      strUrl += '&sort=' + order + ',' + direction;
    }
    return this.http.get<IPageVivienda>(
      this.sURL + '/?page=' + (page - 1) + '&size=' + rpp + strUrl, httpOptions);
  }


  getBusqueda(
    accion: string,
    ciudad: number,
    comarca: number,
    zona: number,
    
  ): Observable<IPageVivienda> {
    let strUrl: string = '';
    if (comarca) {
      strUrl += '&comarca=' + comarca;
    }
    if (zona) {
      strUrl += '&zona=' + zona;
    }
    return this.http.get<IPageVivienda>(
      this.sURL + '/busqueda?ciudad=' + ciudad + '&accion=' + accion + strUrl, httpOptions);
  }

  getPageFiltered(rpp: number, page: number, order: string, direction: string, filter: string, tipoproducto: number): Observable<IPageVivienda> {
    let strOrderUrl: string = "";
    let filterStr: string = "";
    if (order) {
      strOrderUrl += "&sort=" + order + "," + direction;
    }
    if (filter) {
      filterStr += "&filter=" + filter;
    }
    page--;
    return this.http.get<IPageVivienda>(this.sURL + "/page" + "?size=" + rpp + "&page=" + page + strOrderUrl + filterStr + "&filtertype=" + tipoproducto, httpOptions);
  }


  getOne(id: number): Observable<IVivienda> {
    return this.http.get<IVivienda>(this.sURL + "/" + id, httpOptions);
  }

  newOne(oVivienda: IVivienda2Send): Observable<number> {
    return this.http.post<number>(this.sURL + "/new", oVivienda, httpOptions);
  }

  updateOne(oVivienda: IVivienda2Send): Observable<number> {
    return this.http.put<number>(this.sURL + "/" + oVivienda.id, oVivienda, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + "/" + id, httpOptions);
  }


}
