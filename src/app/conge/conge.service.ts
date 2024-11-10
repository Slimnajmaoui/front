
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Conge } from './conge';
    
@Injectable({
  providedIn: 'root'
})
export class CongeService {
  
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

   
    return this.httpClient.get(this.apiURL + '/Conges')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getcongebyuser(): Observable<any> {

   
    return this.httpClient.get(this.apiURL + '/congebyuser?iduser='+localStorage.getItem("Id"))
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(conge:Conge): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/Conges?iduser='+localStorage.getItem("Id"), JSON.stringify(conge), this.httpOptions)
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

  
    return this.httpClient.get(this.apiURL + '/Conges/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, conge:Conge): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/conges/' + id, JSON.stringify(conge), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  update2(id:number, conge:any): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/Conges?id='+id,conge)
  }
       
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/conges/' + id, this.httpOptions)
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
