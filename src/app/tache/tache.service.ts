
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Tache } from './tache';
    
@Injectable({
  providedIn: 'root'
})
export class TacheService {
    
private apiURL = "http://20.55.80.124:8090/api";
      
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

   
    return this.httpClient.get(this.apiURL + '/Taches')
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(tache:Tache): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/Taches', JSON.stringify(tache), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  create2(tache:any,idprojet:any): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/Taches?idprojet='+idprojet,tache)
  }  
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable <any>{

  
    return this.httpClient.get(this.apiURL + '/Taches/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, tache:Tache): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/taches/' + id, JSON.stringify(tache), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }
  update2(id:number, tache:any,idprojet:any): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/Taches?id='+id+"&idprojet="+idprojet,tache)
  }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/taches/' + id, this.httpOptions)
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
