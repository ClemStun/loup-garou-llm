import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-ecran-jeu',
  templateUrl: './ecran-jeu.component.html',
  styleUrls: ['./ecran-jeu.component.scss']
})
export class EcranJeuComponent {
  nbJoueurs = 0;
  isBotOnly = true;
  faLeave = faRightFromBracket;

  constructor(private gameService: GameService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const mode = this.activatedRoute.snapshot.paramMap.get('mode')!;
    this.isBotOnly = mode === 'bot';
    this.start();
  }

  start() {
    this.gameService.getStart().subscribe((data) => {
      console.log(data);
    });
  }
}
