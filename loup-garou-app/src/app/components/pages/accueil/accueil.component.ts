import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Joueur } from 'src/app/models/joueur.model';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  faXmark = faXmark;
  imgSrc = "../../../../assets/images/photo-placeholder.png";
  popup = false;
  joueur!: Joueur;
  listAvatar = [
    "../../../../assets/images/perso1.png",
    "../../../../assets/images/perso2.png",
    "../../../../assets/images/perso3.png",
    "../../../../assets/images/perso4.png",
    "../../../../assets/images/perso5.png",
    "../../../../assets/images/perso6.png",
    "../../../../assets/images/perso7.png",
    "../../../../assets/images/perso8.png",
    "../../../../assets/images/perso9.png",
  ];

  constructor(private joueurService: JoueurService, private route: Router) { }

  selectedAvatar(avatar: string) {
    this.imgSrc = avatar;
  }

  creerPartie() {
    const pseudo = document.getElementById('pseudo') as HTMLInputElement;
    this.joueurService.updateJoueur(new Joueur(pseudo.value, this.imgSrc, ''));
    this.route.navigateByUrl("/new-game", { skipLocationChange: true });
  }

}
