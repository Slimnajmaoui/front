import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { connexionService } from './login.service';  // Assurez-vous que le chemin est correct
import { Router } from '@angular/router';
import { LoginResponse } from './login-response.model';  // Assurez-vous d'importer le modèle
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
      email: new FormControl('', [Validators.required, Validators.email]), // Ajout de la validation pour le format de l'email
      password: new FormControl('', [Validators.required]), // Le mot de passe est requis
    });
  }

  connexion() {
    if (this.loginform.invalid) {
      // Vérification si le formulaire est valide avant d'envoyer la requête
      window.alert("Veuillez remplir correctement tous les champs.");
      return;
    }

    this.service.login(this.loginform.value).subscribe(
      (res: LoginResponse) => {  // Typage de 'res' avec LoginResponse
        // Si la connexion réussie, on sauvegarde le token et autres informations dans le localStorage
        localStorage.setItem("Token", res.token);
        localStorage.setItem("Email", res.email); // Assurez-vous que la réponse contient ces champs
        localStorage.setItem("Role", res.profil);
        localStorage.setItem("Id", res.id);

        window.alert("Connexion réussie!");

        // Optionnel : Ajoutez un délai pour rediriger après la connexion
        setTimeout(() => {
          this.route.navigate(['adminuser/index']); // Rediriger vers la page après connexion
        }, 700); // 700ms pour un léger délai
      },
      (error: HttpErrorResponse) => {  // Typage de 'error' avec HttpErrorResponse
        // Gérer les erreurs ici
        window.alert("Erreur de connexion. Veuillez vérifier vos informations.");
        console.error('Erreur lors de la connexion', error);  // Affichez l'erreur dans la console
      }
    );
  }
}
