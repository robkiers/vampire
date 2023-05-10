import { Component } from '@angular/core';
import { CombatOverviewComponent } from '../../combat/combat-overview/combat-overview.component';
import { CharacterEditorComponent } from '../../character/character-editor/character-editor.component';
import { NgIf } from '@angular/common';
import { ListComponent } from '../../../shared/list/list.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
    standalone: true,
    imports: [
        ButtonComponent,
        ListComponent,
        NgIf,
        CharacterEditorComponent,
        CombatOverviewComponent,
    ],
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
