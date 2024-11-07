
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Avtache } from './avtache';
    
@Injectable({
  providedIn: 'root'
})
export class AvtacheService {
    
  private apiURL = "http://localhost:8080/api";
      
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {
  return this.httpClient.get(this.apiURL + '/Avancementtaches')
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(avtache:Avtache): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/avtaches/create', JSON.stringify(avtache), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 
  create2(avtache:any,idprojet:any): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/Avancementtaches?idprojet='+idprojet, avtache )
  } 
  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable <any>{

  
    return this.httpClient.get(this.apiURL + '/Avancementtaches/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, avtache:Avtache): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/avtaches/' + id, JSON.stringify(avtache), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/Avancementtaches/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}