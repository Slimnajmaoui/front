
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Absence } from './absence';
    
@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
    
  private apiURL = "http://localhost:8081/api";
      
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
     

  constructor(private httpClient: HttpClient) { }
      

  getAll(): Observable<any> {

   
    return this.httpClient.get(this.apiURL + '/Absences')
    .pipe(
      catchError(this.errorHandler)
    )
  }
      

  create(absence:Absence): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/Absences', JSON.stringify(absence), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    

  find(id:number): Observable <any>{

  
    return this.httpClient.get(this.apiURL + '/Absences/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    

  update(id:number, absence:Absence): Observable <any>{

  
    return this.httpClient.put(this.apiURL + '/absences/' + id, JSON.stringify(absence), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/absences/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
      

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
