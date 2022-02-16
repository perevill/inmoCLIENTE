import { IPageTipoVivienda, ITipoVivienda, ITipoVivienda2Send } from './../model/tipovivienda-interfaces';
import { ICiudad, IPageCiudad, ICiudad2Send } from '../model/ciudad-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class TipoViviendaService {
  constructor(private http: HttpClient) { }

  sURL = API_URL + '/tipovivienda';

  getPage(
    rpp: number,
    page: number,
    filter: string,
    order: string,
    direction: string
  ): Observable<IPageTipoVivienda> {
    let strUrl: string = '';
    if (filter) {
      strUrl += '&filter=' + filter;
    }
    if (order) {
      strUrl += '&sort=' + order + ',' + direction;
    }
    return this.http.get<IPageTipoVivienda>(
      this.sURL + '/?page=' + (page - 1) + '&size=' + rpp + strUrl, httpOptions);
  }

  getOne(id: number): Observable<ITipoVivienda> {
    return this.http.get<ITipoVivienda>(this.sURL + '/' + id, httpOptions);
  }

  newOne(oTipoVivienda: ITipoVivienda2Send): Observable<ITipoVivienda> {
    return this.http.post<ITipoVivienda>(
      this.sURL + '/',
      oTipoVivienda,
      httpOptions
    );
  }

  updateOne(oTipoVivienda: ITipoVivienda2Send): Observable<ITipoVivienda> {
    return this.http.put<ITipoVivienda>(
      this.sURL + '/',
      oTipoVivienda,
      httpOptions
    );
  }

  getAll(): Observable<ITipoVivienda[]> {
    return this.http.get<ITipoVivienda[]>(this.sURL + '/all', httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + '/' + id, httpOptions);
  }
}
