import { Component, Input } from '@angular/core';
import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'app-role-popup',
  templateUrl: './role-popup.component.html',
  styleUrls: ['./role-popup.component.scss']
})
export class RolePopupComponent {
  @Input() role!: Role;
}
