import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROLES, ROLES_LIST } from 'src/app/constants/roles.constants';
import { GameService } from 'src/app/services/game.service';
import { JoueurService } from 'src/app/services/joueur.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-nouvelle-partie',
  templateUrl: './nouvelle-partie.component.html',
  styleUrls: ['./nouvelle-partie.component.scss']
})
export class NouvellePartieComponent implements OnInit {
  pseudo!: string;
  imgSrc = "../../../../assets/images/bg.png";
  nombreJoueurs!: number;
  roleActif = true;
  modeActif = true;

  constructor(private rolesService: RolesService, private joueurService: JoueurService, private gameService: GameService, private route: Router) {
    this.joueurService.joueur$.subscribe(joueur => {
      this.pseudo = joueur.pseudo;
      this.imgSrc = joueur.imgSrc;
    });
  }

  ngOnInit(): void {
    this.rolesService.resetArrays();
  }

  getNombreJoueurs(event: any) {
    this.nombreJoueurs = event;
  }

  switchmode(){
    this.modeActif = !this.modeActif;
  }

  switchrole(){
    this.roleActif = !this.roleActif;
  }

  start() {
    this.modeActif ? this.route.navigateByUrl(`/in-game/me`, { skipLocationChange: true }) : this.route.navigate([`/in-game/bot`]);
  }
    
}
