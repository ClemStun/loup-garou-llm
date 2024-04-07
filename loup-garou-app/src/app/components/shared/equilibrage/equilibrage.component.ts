import { Component } from '@angular/core';
import { ROLES, ROLES_LIST } from 'src/app/constants/roles.constants';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-equilibrage',
  templateUrl: './equilibrage.component.html',
  styleUrls: ['./equilibrage.component.scss']
})
export class EquilibrageComponent {
  roles!: Role[];
  loups: number = 5;
  villageois: number = 8;

  constructor(private service: RolesService){
    let element = document.getElementById("bar")!;
    if (element) {
      // Définissez la largeur en utilisant la propriété style.width
      element.style.width = ((this.loups/this.villageois)*100).toString();
    }
    this.service.selectedRolesArray$.subscribe(value => {
      this.roles = value;
      this.loups = this.roles.at(this.roles.findIndex(role => role.name == ROLES_LIST.LOUP_GAROU.name))?.quantity!;
      this.villageois = this.roles.at(this.roles.findIndex(role => role.name == ROLES_LIST.VILLAGEOIS.name))?.quantity!;
      let element = document.getElementById("bar")!;
      if (element) {
        // Définissez la largeur en utilisant la propriété style.width
        element.style.width = ((this.loups/this.villageois)*0).toString();
      }
    });
  }
}
