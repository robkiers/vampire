import { Component, inject, signal, effect } from '@angular/core';
import { CombatOverviewComponent } from '../../combat/combat-overview/combat-overview.component';
import { CharacterEditorComponent } from '../../character/character-editor/character-editor.component';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { ListComponent } from '../../../shared/list/list.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CharacterLookup, Vampire } from 'src/app/core/interface/character';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CharacterService } from 'src/app/core/services/character.service';

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
    AsyncPipe,
    JsonPipe,
  ],
})
export class OverviewComponent {
  router = inject(Router);
  characterService = inject(CharacterService);

  storyId = 0;
  activeCharacterID = signal(0);

  characterList$: Observable<CharacterLookup[]> =
    this.characterService.getStoryCharacterList(this.storyId);
  playerList$: Observable<CharacterLookup[]> =
    this.characterService.getStoryPlayerList(this.storyId);

  character$: Observable<Vampire> = of(new Vampire());

  ef = effect(() => {
    console.log('effect', this.activeCharacterID());
    if (this.activeCharacterID() !== 0) {
      this.character$ = this.characterService.getCharacter(
        this.activeCharacterID()
      );
    }
  });

  quickCharacterList: [] = [];

  mode: 'COMBATMODE' | 'VIEWMODE' = 'VIEWMODE';

  toggleMode() {
    if (this.mode === 'COMBATMODE') {
      this.mode = 'VIEWMODE';
    } else {
      this.mode = 'COMBATMODE';
    }
  }

  goToMain() {
    this.router.navigate(['main']);
  }

  setActiveChar(id: number) {
    this.activeCharacterID.set(id);
  }

  // submit()
}

// export interface characterList {
//   name: string;
//   clan: string;
//   id: number;
// }
