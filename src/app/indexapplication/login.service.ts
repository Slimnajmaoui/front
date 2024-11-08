import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { environment } from "../../environment";
import { User } from "./userconnexion";

@Injectable({
  providedIn: "root",
})
export class ConnexionService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser") || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // Méthode pour obtenir les en-têtes avec le token
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem("Token");
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  login(connexion: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, connexion).pipe(
      map((userconnexion) => {
        if (userconnexion && userconnexion.token) {
          // Enregistrer les informations de l'utilisateur dans localStorage
          localStorage.setItem("User", JSON.stringify(userconnexion));
          localStorage.setItem("Role", userconnexion.profil);
          localStorage.setItem("Email", userconnexion.email);
          localStorage.setItem("Id", userconnexion.id);
          localStorage.setItem("Token", userconnexion.token);

          this.currentUserSubject.next(userconnexion);
          return userconnexion;
        }
      })
    );
  }

  // Méthode pour effectuer des requêtes authentifiées avec le token
  getProtectedData(): Observable<any> {
    const headers = this.getHeaders(); // Ajouter les en-têtes d'authentification
    return this.http.get<any>(`${environment.apiUrl}/protected-endpoint`, { headers });
  }

  // Exemple de méthode pour effectuer un POST avec authentification
  postProtectedData(data: any): Observable<any> {
    const headers = this.getHeaders(); // Ajouter les en-têtes d'authentification
    return this.http.post<any>(`${environment.apiUrl}/protected-endpoint`, data, { headers });
  }
}
