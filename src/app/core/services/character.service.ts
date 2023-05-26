import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterLookup, Vampire } from '../interface/character';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  http = inject(HttpService);

  constructor() {}

  getCharacter(id: number): Observable<Vampire> {
    return this.http.get<Vampire>('character/' + id);
  }

  deleteCharacter(id: number) {
    return this.http.delete<boolean>('character/delete', id);
  }

  updateCharacter(character: Vampire): Observable<boolean> {
    return this.http.put<boolean>('character/' + character.id, character);
  }

  createCharacter(character: Vampire): Observable<boolean> {
    return this.http.post<boolean>('character/create', character);
  }

  getCharacterList(): Observable<CharacterLookup[]> {
    return this.http.get<CharacterLookup[]>('character');
  }

  getStoryCharacterList(storyId: number): Observable<CharacterLookup[]> {
    return this.http.get<CharacterLookup[]>('character/story/' + storyId);
  }

  getStoryPlayerList(storyId: number): Observable<CharacterLookup[]> {
    return this.http.get<CharacterLookup[]>('character/player/' + storyId);
  }
}
