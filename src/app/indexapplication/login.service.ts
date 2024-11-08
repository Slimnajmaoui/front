import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';  // Chemin correct vers l'environnement
import { User } from './userconnexion';  // Assurez-vous que le chemin du modèle est correct

@Injectable({
  providedIn: 'root',  // Ce décorateur permet au service d'être injectable dans toute l'application
})
export class ConnexionService {  // Vérifiez le nom du service ici
  constructor(private http: HttpClient) {}

  login(connexion: any): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, connexion).pipe(
      map((userconnexion) => {
        if (userconnexion && userconnexion.token) {
          localStorage.setItem('User', JSON.stringify(userconnexion));
          localStorage.setItem('Role', userconnexion.profile);
          localStorage.setItem('Email', userconnexion.email);
          localStorage.setItem('Token', userconnexion.token);
          return userconnexion;
        }
        return null;
      })
    );
  }
}
