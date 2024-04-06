import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Role } from '../models/role.model';
import { ROLES_LIST } from '../constants/roles.constants';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private rolesArray: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);
  rolesArray$ = this.rolesArray.asObservable();

  private selectedRolesArray: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);
  selectedRolesArray$ = this.selectedRolesArray.asObservable();

  constructor() { }

  resetArrays() {
    this.rolesArray.next(ROLES_LIST);
    this.selectedRolesArray.next([]);
  }

  addRolesArray(value: Role) {
    this.rolesArray.next([...this.rolesArray.value, value]);
  }

  reduceRolesArray(value: Role) {
    const roles = this.rolesArray.value;
    const index = roles.findIndex(role => role.name === value.name);
    if (index > -1) {
      roles.splice(index, 1);
      this.rolesArray.next(roles);
    }
  }

  addSelectedRolesArray(value: any) {
    this.selectedRolesArray.next([...this.selectedRolesArray.value, value]);
  }

  reduceSelectedRolesArray(value: any) {
    const roles = this.selectedRolesArray.value;
    const index = roles.findIndex(role => role.name === value.name);
    if (index > -1) {
      roles.splice(index, 1);
      this.selectedRolesArray.next(roles);
    }
  }
}
