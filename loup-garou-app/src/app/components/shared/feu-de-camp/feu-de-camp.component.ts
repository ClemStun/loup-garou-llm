import { Component } from '@angular/core';
import { ROLES } from 'src/app/constants/roles.constants';
import { Joueur } from 'src/app/models/joueur.model';
import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'app-feu-de-camp',
  templateUrl: './feu-de-camp.component.html',
  styleUrls: ['./feu-de-camp.component.scss']
})
export class FeuDeCampComponent {
  joueurs: Joueur[] = [
    new Joueur('Joueur 1', '../../../assets/images/villageois.png', ROLES.VILLAGEOIS),
    new Joueur('Joueur 1', '../../../assets/images/villageois.png', ROLES.VILLAGEOIS),
    new Joueur('Joueur 1', '../../../assets/images/villageois.png', ROLES.VILLAGEOIS),
    new Joueur('Joueur 1', '../../../assets/images/villageois.png', ROLES.VILLAGEOIS),
    new Joueur('Joueur 1', '../../../assets/images/villageois.png', ROLES.VILLAGEOIS),
    new Joueur('Joueur 1', '../../../assets/images/villageois.png', ROLES.VILLAGEOIS),
    new Joueur('Joueur 1', '../../../assets/images/villageois.png', ROLES.VILLAGEOIS),
    new Joueur('Joueur 1', '../../../assets/images/villageois.png', ROLES.VILLAGEOIS),
    new Joueur('Joueur 1', '../../../assets/images/villageois.png', ROLES.VILLAGEOIS),
  ]

  calculateRotation(index: number): number {
    const totalPlayers = this.joueurs.length;
    const degreesPerPlayer = 360 / totalPlayers;
    return index * degreesPerPlayer;
  }

  getInfosUser(joueur: Joueur, isImg: boolean): any {
    return isImg ? new Role('', joueur.imgSrc, 0) : joueur.pseudo;
  }
}
