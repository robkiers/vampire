import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Vampire } from '../interface/character';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  http = inject(HttpService);

  constructor() {}

  getCharacter(id: string): Observable<Vampire> {
    return this.http.get<Vampire>('character/' + id);
  }

  deleteCharacter(id: string) {
    return this.http.delete<boolean>('character/delete', id);
  }

  updateCharacter(character: Vampire): Observable<boolean> {
    return this.http.put<boolean>('character/' + character.id, character);
  }

  createCharacter(character: Vampire): Observable<boolean> {
    return this.http.post<boolean>('character/create', character);
  }

  getStoryCharacterList(storyId: string): Observable<Vampire[]> {
    return this.http.get<Vampire[]>('character/list/story/' + storyId);
  }

  getPlayerCharacterList(playerId: string): Observable<Vampire[]> {
    return this.http.get<Vampire[]>('character/list/player/' + playerId);
  }
}
