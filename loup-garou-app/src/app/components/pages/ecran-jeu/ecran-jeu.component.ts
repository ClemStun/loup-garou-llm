import { Component } from '@angular/core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ecran-jeu',
  templateUrl: './ecran-jeu.component.html',
  styleUrls: ['./ecran-jeu.component.scss']
})
export class EcranJeuComponent {
  faLeave = faRightFromBracket;
}
