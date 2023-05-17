import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormInputComponent } from 'src/app/shared/form-input/form-input.component';
import {
  CharacterLookup,
  Chronicle,
  Era,
} from 'src/app/core/interface/character';
import { ListComponent } from 'src/app/shared/list/list.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [ButtonComponent, FormInputComponent, ListComponent],
})
export class LandingPageComponent {
  storyList: Chronicle[] = [];
  characterList: CharacterLookup[] = [];

  constructor() {
    this.storyList = [
      {
        name: 'Millenium',
        id: 1,
        era: 'MEDIEVAL',
        version: 'V20',
        type: 'VAMPIRE',
      },
      {
        name: 'Kiev',
        id: 2,
        era: 'MEDIEVAL',
        version: 'V2',
        type: 'VAMPIRE',
      },
    ];
    this.characterList = [
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
  }
}
