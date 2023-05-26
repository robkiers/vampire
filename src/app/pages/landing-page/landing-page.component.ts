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
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [ButtonComponent, FormInputComponent, ListComponent, AsyncPipe],
})
export class LandingPageComponent {
  router = inject(Router);
  storyService = inject(StoryService);
  characterService = inject(CharacterService);

  characterList$: Observable<CharacterLookup[]> = this.characterService.getCharacterList();
  storyList$: Observable<Chronicle[]> = this.storyService.getStoryList();

  constructor() {}

  goToStory(id: number) {
    this.router.navigate(['story/' + id]);
  }

  gotToCharacter() {
    // this.router.navigate(['character']);
  }
}
