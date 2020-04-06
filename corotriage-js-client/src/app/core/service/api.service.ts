import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Realiza invocacion de un metodo get al api de servicios
   * @param url Endpoint del servicio
   */
  get(url: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + url)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Realiza una invocacion de un metodo post al api de servicios
   * @param url Endpoint de servicio
   * @param body Cuerpo de la peticion
   */
  post(url: string, body: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '' + url, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Realiza una invocacion de un metodo patch al api de servicios
   * @param url Endpoint de servicio
   * @param body Cuerpo de la peticion
   */
  patch(url: string, body: any): Observable<any> {
    return this.http.patch<any>(environment.apiUrl + '' + url, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Realiza una invocacion de metodo patch a un api de servicios
   * @param url Endpoint de servicio
   */
  delete(url: string): Observable<any> {
    return this.http.delete(environment.apiUrl + '' + url)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}