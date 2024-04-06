import { Component, Input } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-carte-role',
  templateUrl: './carte-role.component.html',
  styleUrls: ['./carte-role.component.scss']
})
export class CarteRoleComponent {
  @Input() role!: Role;

  @Input() isAlternative: boolean = false;

  @Input() label: string = '';

  value!: number;
  faCircleInfo = faCircleInfo;

  constructor(private rolesService: RolesService) { }

  ngOnInit(): void {
    console.log(this.role);
    this.value = this.role.quantity;
  }

  getValue(event: any) {
    this.value = event;

    if (this.value === 0) {
      this.role.quantity = 0;
      this.rolesService.addRolesArray(this.role);
      this.rolesService.reduceSelectedRolesArray(this.role);
    } else {
      if (this.role.quantity === 0) {
        this.role.quantity++;
        this.rolesService.reduceRolesArray(this.role);
        this.rolesService.addSelectedRolesArray(this.role);
      }
    }
  }
}
