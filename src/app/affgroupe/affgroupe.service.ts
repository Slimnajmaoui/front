
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Affgroupe } from './affgroupe';
    
@Injectable({
  providedIn: 'root'
})
export class AffgroupeService {
    
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

   
    return this.httpClient.get(this.apiURL + '/Affectationgroupes')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getbyuser(): Observable<any> {

   
    return this.httpClient.get(this.apiURL + '/affectationbyuser?iduser='+localStorage.getItem("Id"))
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(affgroupe:any,id:any): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/Affectationgroupes?id='+id, affgroupe)
  }  
  create2(affgroupe:any,id:any,idgroupe:any): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/Affectationgroupes?id='+id+'&idgroupe='+idgroupe, affgroupe)
  }  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable <any>{

  
    return this.httpClient.get(this.apiURL + '/Affectationgroupes/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, affgroupe:Affgroupe): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/Affectationgroupes' + id, JSON.stringify(affgroupe), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }
  update2(id:number,groupe:any,user:any, affe:any): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/Affectationgroupes?idaff='+ id+"&id="+user+"&idgroupe="+groupe,affe)
  }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/Affectationgroupes/' + id, this.httpOptions)
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