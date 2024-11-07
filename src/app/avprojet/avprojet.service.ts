
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Avprojet } from './avprojet';
    
@Injectable({
  providedIn: 'root'
})
export class AvprojetService {
    
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

   
    return this.httpClient.get(this.apiURL + '/Avancementprojets')
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(avprojet:Avprojet): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/avprojets/create', JSON.stringify(avprojet), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  create2(avprojet:any,idprojet:any): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/Avancementprojets?idprojet='+idprojet,avprojet)
  }  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable <any>{

  
    return this.httpClient.get(this.apiURL + '/Avancementprojets/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, avprojet:Avprojet): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/avprojets/' + id, JSON.stringify(avprojet), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }
  update2(id:number, avprojet:any,idprojet:any): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/Avancementprojet?id='+id+"&idprojet="+idprojet,avprojet)
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/Avancementprojet/' + id, this.httpOptions)
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