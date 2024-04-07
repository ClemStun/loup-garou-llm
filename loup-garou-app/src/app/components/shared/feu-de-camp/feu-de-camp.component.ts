import { Component, Input } from '@angular/core';
import { ROLES } from 'src/app/constants/roles.constants';
import { Joueur } from 'src/app/models/joueur.model';
import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'app-feu-de-camp',
  templateUrl: './feu-de-camp.component.html',
  styleUrls: ['./feu-de-camp.component.scss']
})
export class FeuDeCampComponent {
  @Input() nbJoueurs = 8;

  pseudos = [
    'Ronteah', 'Stun', 'Hugod', 'Chrakos', 'Retweet', 'Clement C', 'Geekswy', 'Jacoboni', 'Mister V'
  ];

  images = [
    '../../../assets/images/perso1.png',
    '../../../assets/images/perso2.png',
    '../../../assets/images/perso3.png',
    '../../../assets/images/perso4.png',
    '../../../assets/images/perso5.png',
    '../../../assets/images/perso6.png',
    '../../../assets/images/perso7.png',
    '../../../assets/images/perso8.png',
    '../../../assets/images/perso9.png',
  ];

  joueurs: any[] = [];

  ngOnInit(): void {
    this.generateJoueurs();
  }

  generateJoueurs() {
    for (let i = 0; i < this.nbJoueurs; i++) {
      const randomIndex = Math.floor(Math.random() * this.pseudos.length);
      const pseudo = this.pseudos[randomIndex];
      const imgSrc = this.images[randomIndex];
      this.joueurs.push(new Joueur(pseudo, imgSrc, ROLES.VILLAGEOIS));
    }
    console.log(this.joueurs);
  }

  calculateRotation(index: number): number {
    const totalPlayers = this.joueurs.length;
    const degreesPerPlayer = 360 / totalPlayers;
    return index * degreesPerPlayer;
  }

  getInfosUser(joueur: Joueur, isImg: boolean): any {
    return isImg ? new Role('', joueur.imgSrc, 0) : joueur.pseudo;
  }
}
