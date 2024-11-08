import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { connexionService } from './login.service';  // Assurez-vous que le chemin est correct
import { Router } from '@angular/router';
import { User } from './userconnexion';  // Import du modèle User
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-indexapplication',
  standalone: true,
  imports: [ReactiveFormsModule],  // ReactiveFormsModule est suffisant
  templateUrl: './indexapplication.component.html',
  styleUrls: ['./indexapplication.component.css']  // Assurez-vous que le fichier CSS est correct
})
export class IndexapplicationComponent {
  loginform!: FormGroup;

  constructor(private service: connexionService, private route: Router) {}

  ngOnInit() {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), // Validation du format de l'email
      password: new FormControl('', [Validators.required]), // Le mot de passe est requis
    });
  }

  connexion() {
    if (this.loginform.invalid) {
      window.alert("Veuillez remplir correctement tous les champs.");
      return;
    }

    this.service.login(this.loginform.value).subscribe(
      (res: User) => {  // Typage de 'res' avec User
        if (res && res.token) {
          // Sauvegarde du token et autres informations dans localStorage
          localStorage.setItem("Token", res.token);
          localStorage.setItem("Email", res.email); // Vérifiez que la réponse contient ces champs
          localStorage.setItem("Profile", res.profile);

          window.alert("Connexion réussie!");

          // Redirection après la connexion
          setTimeout(() => {
            this.route.navigate(['adminuser/index']);
          }, 700);
        } else {
          window.alert("La connexion a échoué. Vérifiez vos informations.");
        }
      },
      (error: HttpErrorResponse) => {  // Gestion des erreurs HTTP
        window.alert("Erreur de connexion. Veuillez vérifier vos informations.");
        console.error('Erreur lors de la connexion', error);  // Affichez l'erreur dans la console
      }
    );
  }
}
