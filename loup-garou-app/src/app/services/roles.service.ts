import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Role } from '../models/role.model';
import { ROLES_LIST } from '../constants/roles.constants';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private rolesArray: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);
  rolesArray$ = this.rolesArray.asObservable();

  private selectedRolesArray: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);
  selectedRolesArray$ = this.selectedRolesArray.asObservable();

  constructor(private cookieService: CookieService) { }

  resetArrays() {
    this.rolesArray.next(ROLES_LIST);
    this.selectedRolesArray.next([]);
  }

  addRolesArray(value: Role) {
    this.rolesArray.next([...this.rolesArray.value, value]);
    this.cookieService.set('roles', JSON.stringify(this.selectedRolesArray.value));
  }

  reduceRolesArray(value: Role) {
    const roles = this.rolesArray.value;
    const index = roles.findIndex(role => role.name === value.name);
    if (index > -1) {
      roles.splice(index, 1);
      this.rolesArray.next(roles);
    }
    this.cookieService.set('roles', JSON.stringify(this.selectedRolesArray.value));
  }

  addSelectedRolesArray(value: any) {
    this.selectedRolesArray.next([...this.selectedRolesArray.value, value]);
    this.cookieService.set('roles', JSON.stringify(this.selectedRolesArray.value));
  }

  reduceSelectedRolesArray(value: any) {
    const roles = this.selectedRolesArray.value;
    const index = roles.findIndex(role => role.name === value.name);
    if (index > -1) {
      roles.splice(index, 1);
      this.selectedRolesArray.next(roles);
    }
    this.cookieService.set('roles', JSON.stringify(this.selectedRolesArray.value));
  }
}
