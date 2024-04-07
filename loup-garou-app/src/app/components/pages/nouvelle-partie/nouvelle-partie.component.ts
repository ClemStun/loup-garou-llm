import { Component, OnInit } from '@angular/core';
import { ROLES, ROLES_LIST } from 'src/app/constants/roles.constants';
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

  constructor(private rolesService: RolesService, private joueurService: JoueurService) {
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
    
}
