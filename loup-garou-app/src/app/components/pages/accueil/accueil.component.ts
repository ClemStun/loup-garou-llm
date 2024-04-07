import { Component } from '@angular/core';
import { faCancel, faCross, faHome, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  faXmark = faXmark;
  imgSrc = "../../../../assets/images/bg.png";
  popup = false;
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
  ]

}
