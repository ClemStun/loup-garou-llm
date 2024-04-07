import { Component } from '@angular/core';

@Component({
  selector: 'app-role-popup',
  templateUrl: './role-popup.component.html',
  styleUrls: ['./role-popup.component.scss']
})
export class RolePopupComponent {
  role = "Loup-Garou";
  imgSrc = "../../../../assets/images/loup-garou.png";
  description = "Durant la nuit les Loups-Garous se réunissent pour voter qui va être éliminé. Pendant la journée il ne doit pas être démasqué.";

}
