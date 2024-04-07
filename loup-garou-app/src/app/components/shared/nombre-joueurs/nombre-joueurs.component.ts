import { Component, EventEmitter, Output } from '@angular/core';
import { faAdd, faHome, faMinus } from '@fortawesome/free-solid-svg-icons';
import { range } from 'rxjs';

@Component({
  selector: 'app-nombre-joueurs',
  templateUrl: './nombre-joueurs.component.html',
  styleUrls: ['./nombre-joueurs.component.scss']
})
export class NombreJoueursComponent {

  @Output() nombreJoueurEmitter: EventEmitter<number> = new EventEmitter<number>();

  minus = faMinus;
  add = faAdd;
  nbjoueurs: number[] = [];
  selectedChiffre = 7;

  constructor() {
    for (let i = 5; i < 10; i++) {
      this.nbjoueurs.push(i);
    }
  }

  moins(){

    if(this.selectedChiffre > 5){
      this.selectedChiffre--;

      this.nbjoueurs = this.nbjoueurs.map(nb => nb - 1);
      this.emitNombreJoueur();
    }
  }

  plus(){

    if(this.selectedChiffre < 15){
      this.selectedChiffre++;

      this.nbjoueurs = this.nbjoueurs.map(nb => nb + 1);
      this.emitNombreJoueur();
    }
  }

  emitNombreJoueur(){
    this.nombreJoueurEmitter.emit(this.selectedChiffre);
  }
}
