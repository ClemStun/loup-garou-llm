import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Joueur } from '../models/joueur.model';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private joueur: BehaviorSubject<Joueur> = new BehaviorSubject<Joueur>(new Joueur('', '', new Role('', '', 0)));
  joueur$ = this.joueur.asObservable();

  constructor() { }

  updateJoueur(value: any) {
    this.joueur.next(value);
  }
}
