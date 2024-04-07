import { Component } from '@angular/core';

@Component({
  selector: 'app-feu-de-camp',
  templateUrl: './feu-de-camp.component.html',
  styleUrls: ['./feu-de-camp.component.scss']
})
export class FeuDeCampComponent {
  players = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 5', 'Player 5', 'Player 5']; // Vous pouvez remplacer cela par votre propre liste de joueurs

  calculateRotation(index: number): number {
    const totalPlayers = this.players.length;
    const degreesPerPlayer = 360 / totalPlayers;
    return index * degreesPerPlayer;
  }

  getInfosUser(player:)
}
