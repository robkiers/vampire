import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  characterList = [
    {
      characterName: 'Citrio',
      clan: 'Salubri',
      id: 1,
    },
    {
      characterName: 'John',
      clan: 'Salubri',
      id: 2,
    },
    {
      characterName: 'Kearthe',
      clan: 'Gangrel',
      id: 3,
    },
  ];

  playerList = [
    {
      characterName: 'Brian',
      clan: 'Gangrel',
      id: 4,
    },
    {
      characterName: 'George',
      clan: 'Tzimische',
      id: 5,
    },
  ];

  quickCharacterList: [] = [];

  mode: 'COMBATMODE' | 'VIEWMODE' = 'COMBATMODE';

  toggleMode() {
    if (this.mode === 'COMBATMODE') {
      this.mode = 'VIEWMODE';
    } else {
      this.mode = 'COMBATMODE';
    }
  }
}

export interface characterList {
  name: string;
  clan: string;
  id: number;
}
