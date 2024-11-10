
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Affprojet } from './affprojet';
    
@Injectable({
  providedIn: 'root'
})
export class AffprojetService {
    
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

   
    return this.httpClient.get(this.apiURL + '/Affectationprojet')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  
  getaffectationprojetbyuser(): Observable<any> {

   
    return this.httpClient.get(this.apiURL + '/affectationprojetbyuser?iduser='+localStorage.getItem("Id"))
    .pipe(
      catchError(this.errorHandler)
    )
  }
  

  /**
   * Write code on Method
   *
   * @return response()
   */
  create(affprojet:any,id:any): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/Affectationprojet?id='+id,affprojet)
  }  
  create2(affprojet:any,id:any,idprojet:any): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/Affectationprojet?id='+id+'&idprojet='+idprojet,affprojet)
  }  
    
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable <any>{

  
    return this.httpClient.get(this.apiURL + '/Affectationprojet/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, affprojet:Affprojet): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/affprojets/' + id, JSON.stringify(affprojet), this.httpOptions)
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
    return this.httpClient.delete(this.apiURL + '/Affectationprojet/' + id, this.httpOptions)
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
