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

  login(connexion: any) {
    // Ajouter les options de requête avec les en-têtes et withCredentials pour inclure les cookies
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true  // Inclure les cookies dans la requête pour le CORS
    };

    return this.http.post<any>(`${environment.apiUrl}/auth/login`, connexion, httpOptions).pipe(
      map((userconnexion) => {
        if (userconnexion && userconnexion.token) {
          // Enregistrer les informations utilisateur dans le localStorage
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
}
