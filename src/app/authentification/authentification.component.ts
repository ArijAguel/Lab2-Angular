import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  authForm!: FormGroup;  // Déclaration de la propriété

  // Utilisation de FormBuilder pour initialiser le formulaire
  constructor(private fb: FormBuilder) {}

  // Initialisation du formulaire dans ngOnInit
  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Le champ email est requis et doit être un email valide
      password: ['', [Validators.required, Validators.minLength(4)]]  // Le champ password est requis et doit avoir au moins 4 caractères
    });
  }

  // Accesseurs pour les champs du formulaire
  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    if (this.authForm.valid) {
      console.log('Formulaire soumis', this.authForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
