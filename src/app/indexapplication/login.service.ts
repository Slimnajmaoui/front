import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { environment } from "../environment";
import { User } from "./userconnexion";

@Injectable({
  providedIn: "root",
})
export class connexionService {
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
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, connexion).pipe(
      map((userconnexion) => {
        if (userconnexion && userconnexion.token) {
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
