import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entete } from "./entete/entete";
import { ContactsCompetencesLangues } from "./contacts-competences-langues/contacts-competences-langues";
import { Experiences } from "./experiences/experiences";
import { Formations } from "./formations/formations";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Entete, ContactsCompetencesLangues, Experiences, Formations],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
