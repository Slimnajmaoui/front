
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Chefdeprojet } from './chefdeprojet';
    
@Injectable({
  providedIn: 'root'
})
export class ChefdeprojetService {
    
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

   
    return this.httpClient.get(this.apiURL + '/chefdeprojets/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getbyprofil(): Observable<any> {

    let pr="chef de projet";

    return this.httpClient.get(this.apiURL + '/Userbyprofil?profil='+pr)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(chefdeprojet:any): Observable<any> {
    let pr="chef de projet";
   
    return this.httpClient.post(this.apiURL + '/Users?profil='+pr, JSON.stringify(chefdeprojet), this.httpOptions)
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

  
    return this.httpClient.get(this.apiURL + '/Users/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, chefdeprojet:Chefdeprojet): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/chefdeprojets/' + id, JSON.stringify(chefdeprojet), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }
  update2(id:number,email:any): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/Users?id='+id+"&email="+email,{})
  }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/chefdeprojets/' + id, this.httpOptions)
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