import { IPageZona, IZona, IZona2Send } from './../model/zona-interfaces';
import { ICiudad, IPageCiudad, ICiudad2Send } from '../model/ciudad-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ZonaService {
  constructor(private http: HttpClient) { }

  sURL = API_URL + '/zona';

  getPage(
    rpp: number,
    page: number,
    filter: string,
    order: string,
    direction: string
  ): Observable<IPageZona> {
    let strUrl: string = '';
    if (filter) {
      strUrl += '&filter=' + filter;
    }
    if (order) {
      strUrl += '&sort=' + order + ',' + direction;
    }
    return this.http.get<IPageZona>(
      this.sURL + '/?page=' + (page - 1) + '&size=' + rpp + strUrl, httpOptions);
  }

  getOne(id: number): Observable<IZona> {
    return this.http.get<IZona>(this.sURL + '/' + id, httpOptions);
  }

  newOne(oZona: IZona2Send): Observable<IZona> {
    return this.http.post<IZona>(
      this.sURL + '/',
      oZona,
      httpOptions
    );
  }

  updateOne(oZona: IZona2Send): Observable<IZona> {
    return this.http.put<IZona>(
      this.sURL + '/',
      oZona,
      httpOptions
    );
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + '/' + id, httpOptions);
  }
}
