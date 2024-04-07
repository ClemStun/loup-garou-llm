import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bulle-avatar',
  templateUrl: './bulle-avatar.component.html',
  styleUrls: ['./bulle-avatar.component.scss']
})
export class BulleAvatarComponent {
  @Input() avatar!:string;
}
