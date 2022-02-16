import { ICiudad, IPageCiudad, ICiudad2Send } from '../model/ciudad-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { IComarca, IComarca2Send, IPageComarca } from '../model/comarca-interfaces';


@Injectable({
  providedIn: 'root',
})
export class ComarcaService {
  constructor(private http: HttpClient) { }

  sURL = API_URL + '/comarca';

  getPage(
    rpp: number,
    page: number,
    filter: string,
    order: string,
    direction: string
  ): Observable<IPageComarca> {
    let strUrl: string = '';
    if (filter) {
      strUrl += '&filter=' + filter;
    }
    if (order) {
      strUrl += '&sort=' + order + ',' + direction;
    }
    return this.http.get<IPageComarca>(
      this.sURL + '/?page=' + (page - 1) + '&size=' + rpp + strUrl, httpOptions);
  }

  getPagebyCiudad(
    idciudad: number
    
  ): Observable<IPageComarca> {
    
    return this.http.get<IPageComarca>(
      this.sURL + '/ciudad?ciudad=' + idciudad, httpOptions);
  }
  

  getOne(id: number): Observable<IComarca> {
    return this.http.get<IComarca>(this.sURL + '/' + id, httpOptions);
  }

  newOne(oComarca: IComarca2Send): Observable<IComarca> {
    return this.http.post<IComarca>(
      this.sURL + '/',
      oComarca,
      httpOptions
    );
  }

  updateOne(oComarca: IComarca2Send): Observable<IComarca> {
    return this.http.put<IComarca>(
      this.sURL + '/',
      oComarca,
      httpOptions
    );
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + '/' + id, httpOptions);
  }
}
