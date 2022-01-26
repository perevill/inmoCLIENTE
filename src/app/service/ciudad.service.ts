import { ICiudad, IPageCiudad, ICiudad2Send } from './../model/ciudad-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CiudadService {
  constructor(private http: HttpClient) { }

  sURL = API_URL + '/ciudad';

  getPage(
    rpp: number,
    page: number,
    filter: string,
    order: string,
    direction: string
  ): Observable<IPageCiudad> {
    let strUrl: string = '';
    if (filter) {
      strUrl += '&filter=' + filter;
    }
    if (order) {
      strUrl += '&sort=' + order + ',' + direction;
    }
    return this.http.get<IPageCiudad>(
      this.sURL + '/?page=' + (page - 1) + '&size=' + rpp + strUrl, httpOptions);
  }

  getOne(id: number): Observable<ICiudad> {
    return this.http.get<ICiudad>(this.sURL + '/' + id, httpOptions);
  }

  newOne(oTipoProducto: ICiudad2Send): Observable<ICiudad> {
    return this.http.post<ICiudad>(
      this.sURL + '/',
      oTipoProducto,
      httpOptions
    );
  }

  updateOne(oTipoProducto: ICiudad2Send): Observable<ICiudad> {
    return this.http.put<ICiudad>(
      this.sURL + '/',
      oTipoProducto,
      httpOptions
    );
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + '/' + id, httpOptions);
  }
}
