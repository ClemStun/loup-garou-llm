import { Component, Output } from '@angular/core';
import { faAdd, faHome, faMinus } from '@fortawesome/free-solid-svg-icons';
import { range } from 'rxjs';

@Component({
  selector: 'app-nombre-joueurs',
  templateUrl: './nombre-joueurs.component.html',
  styleUrls: ['./nombre-joueurs.component.scss']
})
export class NombreJoueursComponent {
  minus = faMinus;
  add = faAdd;
  nbjoueurs: number[] = [];
  @Output() selectedChiffre = 7;

  constructor() {
    for (let i = 5; i < 10; i++) {
      this.nbjoueurs.push(i);
    }
  }

  moins(){

    if(this.selectedChiffre > 5){
      this.selectedChiffre--;

      this.nbjoueurs = this.nbjoueurs.map(nb => nb - 1);
    }
    
    

    // // Sélectionnez l'élément parent auquel vous souhaitez ajouter les divs
    // const parentElement = document.getElementById('joueurs');
    // console.log(parentElement);
    // // Créez un nouvel élément div
    // const newDiv = document.createElement('div');

    // // Ajoutez des classes à votre div si nécessaire
    // newDiv.classList.add('element', 'slide-right-10');

    // // Obtenez le premier enfant de l'élément parent
    // const firstChild = parentElement?.firstChild;

    // // Ajoutez le nouvel élément div devant le premier enfant
    // if (firstChild) {
    //     parentElement?.insertBefore(newDiv, firstChild);
    // } else {
    //     // Si aucun enfant n'est présent, ajoutez simplement le nouvel élément à la fin
    //     parentElement?.appendChild(newDiv);
    // }
  }

  plus(){

    if(this.selectedChiffre < 15){
      this.selectedChiffre++;

      this.nbjoueurs = this.nbjoueurs.map(nb => nb + 1);
    }

    // // Sélectionnez l'élément parent
    // const parentElement = document.getElementById('joueurs');

    // // Parcourez tous les enfants de l'élément parent
    // const children = parentElement?.children;

    // // Vérifiez si l'enfant existe avant de le supprimer
    // if (children && children[0].classList.contains('slide-right-10')) {
    //     parentElement?.removeChild(children[0]);
    // } else {
    //     console.log("Aucun enfant à supprimer.");
    // }
  }
}
