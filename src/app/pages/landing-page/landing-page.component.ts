import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormInputComponent } from 'src/app/shared/form-input/form-input.component';
import {
  CharacterLookup,
  Chronicle,
  Era,
} from 'src/app/core/interface/character';
import { ListComponent } from 'src/app/shared/list/list.component';
import { Router } from '@angular/router';
import { StoryService } from 'src/app/core/services/story.service';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [ButtonComponent, FormInputComponent, ListComponent],
})
export class LandingPageComponent {
  router = inject(Router);
  storyService = inject(StoryService);
  characterService = inject(CharacterService);

  // storyList: Chronicle[] = this.storyService.getStoryList();
  characterList: CharacterLookup[] = [];
  storyList: Chronicle[] = [];
  constructor() {
    this.storyList = [
      {
        name: 'Millenium',
        id: 1,
        era: 'MEDIEVAL',
        version: 'V20',
        type: 'VAMPIRE',
        storyTeller: 'Rob',
      },
      {
        name: 'Kiev',
        id: 2,
        era: 'MEDIEVAL',
        version: 'V2',
        type: 'VAMPIRE',
        storyTeller: 'Rob',
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
            storyTeller: 'Rob',
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
            storyTeller: 'Rob',
          },
        ],
        era: 'MEDIEVAL',
        version: 'V20',
        type: 'VAMPIRE',
        clan: 'gangrel',
      },
    ];
  }

  gotToStory(id: number) {
    this.router.navigate(['story/' + id]);
  }

  gotToCharacter() {
    // this.router.navigate(['character']);
  }
}
