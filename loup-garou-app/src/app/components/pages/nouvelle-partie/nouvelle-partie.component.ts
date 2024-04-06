import { Component, OnInit } from '@angular/core';
import { ROLES, ROLES_LIST } from 'src/app/constants/roles.constants';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-nouvelle-partie',
  templateUrl: './nouvelle-partie.component.html',
  styleUrls: ['./nouvelle-partie.component.scss']
})
export class NouvellePartieComponent implements OnInit {
  pseudo = "Louis";
  imgSrc = "../../../../assets/images/bg.png";

  constructor(private rolesService: RolesService) { }

  ngOnInit(): void {
    this.rolesService.resetArrays();
  }
    
}
