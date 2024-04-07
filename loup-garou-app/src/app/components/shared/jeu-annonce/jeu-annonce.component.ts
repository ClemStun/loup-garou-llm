import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-jeu-annonce',
  templateUrl: './jeu-annonce.component.html',
  styleUrls: ['./jeu-annonce.component.scss']
})
export class JeuAnnonceComponent implements OnInit{
  @Input() message = "Vous êtes mort"
  popupVisible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.popupVisible = false;
    }, 5000);
  }
}
