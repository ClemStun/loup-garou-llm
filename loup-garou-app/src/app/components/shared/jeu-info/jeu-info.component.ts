import { Component, Input } from '@angular/core';
import { faComment, faInfo, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ROLES } from 'src/app/constants/roles.constants';

@Component({
  selector: 'app-jeu-info',
  templateUrl: './jeu-info.component.html',
  styleUrls: ['./jeu-info.component.scss']
})
export class JeuInfoComponent {
  @Input() isDay = true;
  @Input() isInfo = true;

  currentRole = ROLES.VILLAGEOIS;

  faSun = faSun;
  faMoon = faMoon;

  timer: any;
  minutes = 0;
  seconds = 0;
  numeroJour = 1;
  timerString = '00:00';

  faInfo = faInfo;
  faComment = faComment;

  constructor() { }

  ngOnInit() {
    const root = document.querySelector(':root') as HTMLElement;

    if(!!root) {
      root.style.setProperty('--blend-mode', this.isDay ? 'normal' : 'overlay');
    }

    this.startTimer();
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
      this.timerString = `${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`;
    }, 1000);
  }

  formatTime(time: number): string {
    return time < 10 ? '0' + time : '' + time;
  }
}
