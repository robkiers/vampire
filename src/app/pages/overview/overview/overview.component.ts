import { Component } from '@angular/core';
import { CombatOverviewComponent } from '../../combat/combat-overview/combat-overview.component';
import { CharacterEditorComponent } from '../../character/character-editor/character-editor.component';
import { NgIf } from '@angular/common';
import { ListComponent } from '../../../shared/list/list.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CharacterLookup } from 'src/app/core/interface/character';

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
  characterList: CharacterLookup[] = [
    {
      name: 'Citrio',
      id: 1,
      chronicle: [
        {
          name: 'Millenium',
          id: 1,
          era: 'MEDIEVAL',
          version: 'V20',
          type: 'VAMPIRE',
        },
      ],
      era: 'MEDIEVAL',
      version: 'V20',
      type: 'VAMPIRE',
      clan: 'ventrue',
    },
    {
      name: 'Kearthe',
      id: 2,
      chronicle: [
        {
          name: 'Millenium',
          id: 1,
          era: 'MEDIEVAL',
          version: 'V20',
          type: 'VAMPIRE',
        },
      ],
      era: 'MEDIEVAL',
      version: 'V20',
      type: 'VAMPIRE',
      clan: 'gangrel',
    },
  ];

  playerList: CharacterLookup[] = [
    {
      name: 'Kearthe',
      id: 3,
      chronicle: [
        {
          name: 'Millenium',
          id: 1,
          era: 'MEDIEVAL',
          version: 'V20',
          type: 'VAMPIRE',
        },
      ],
      era: 'MEDIEVAL',
      version: 'V20',
      type: 'VAMPIRE',
      clan: 'gangrel',
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

// export interface characterList {
//   name: string;
//   clan: string;
//   id: number;
// }
