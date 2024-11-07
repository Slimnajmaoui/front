
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { User } from './user';
    
@Injectable({
  providedIn: 'root'
})
export class UserService {
    
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

   
    return this.httpClient.get(this.apiURL + '/Users')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  Userbyprofil(): Observable<any> {
const pr = "Admin";
   
    return this.httpClient.get(this.apiURL + '/Userbyprofil?profil='+pr)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  Userdeveloppeur(): Observable<any> {
    const pr = "Developpeur";
       
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
  create(user:any): Observable<any> {
    let pr="Admin";
   
    return this.httpClient.post(this.apiURL + '/Users?profil='+pr, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  create2(user:any,profil:any ): Observable<any> {
   
    return this.httpClient.post(this.apiURL + '/Users?profil='+profil, JSON.stringify(user), this.httpOptions)
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
  update(id:number, user:User): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/users/' + id, JSON.stringify(user), this.httpOptions)
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
    return this.httpClient.delete(this.apiURL + '/users/' + id, this.httpOptions)
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