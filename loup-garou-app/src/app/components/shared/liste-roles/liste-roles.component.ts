import { Component, Input } from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-liste-roles',
  templateUrl: './liste-roles.component.html',
  styleUrls: ['./liste-roles.component.scss']
})
export class ListeRolesComponent {
  @Input() roles!: Role[];

  @Input() moreColumns = false;

  @Input() isSelectedRoles = false;

  @Input() isNonSelectedRoles = false;

  @Input() title = '';

  @Input() isEditable = true;

  constructor(private rolesService: RolesService) { }

  ngOnInit(): void {
    if (this.isNonSelectedRoles) {
      this.rolesService.rolesArray$.subscribe(value => {
        this.roles = value;
      });
    }
    if (this.isSelectedRoles) {
      this.rolesService.selectedRolesArray$.subscribe(value => {
        this.roles = value;
      });
    }
  }
}
