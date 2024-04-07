import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Joueur } from '../models/joueur.model';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private joueur: BehaviorSubject<Joueur> = new BehaviorSubject<Joueur>(new Joueur('', '', ''));
  joueur$ = this.joueur.asObservable();

  constructor() { }

  updateJoueur(value: any) {
    this.joueur.next(value);
  }
}
