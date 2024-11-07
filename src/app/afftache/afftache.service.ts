
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Afftache } from './afftache';
    
@Injectable({
  providedIn: 'root'
})
export class AfftacheService {
    
  private apiURL = "http://localhost:8081/api";
      
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

   
    return this.httpClient.get(this.apiURL + '/Affectationtache')
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  affectationtachebyuser(): Observable<any> {

   
    return this.httpClient.get(this.apiURL + '/affectationtachebyuser?iduser='+localStorage.getItem("Id"))
    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */

  create2(afftache:any,idtache:any,iduser:any): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/AffectationtacheData?id='+iduser+"&idtache="+idtache,afftache)
  }  
  create(afftache:any): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/afftaches/create', JSON.stringify(afftache), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable <any>{

  
    return this.httpClient.get(this.apiURL + '/Affectationtache/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, afftache:Afftache): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/afftaches/' + id, JSON.stringify(afftache), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }
  
  
  update2(id:number, afftache:any,tache:any,user:any): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/Affectationtache?id='+id+"&iduser="+user+"&idtache="+tache,afftache)
  }
  

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/Affectationtache/' + id, this.httpOptions)
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