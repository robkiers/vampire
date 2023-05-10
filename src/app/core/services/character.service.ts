import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../interface/character';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpService) {}

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>('character/' + id);
  }

  deleteCharacter(id: string): Observable<boolean> {
    return this.http.delete<boolean>('character/delete', id);
  }

  updateCharacter(character: Character): Observable<boolean> {
    return this.http.put<boolean>('character/' + character.id, character);
  }

  createCharacter(character: Character): Observable<boolean> {
    return this.http.post<boolean>('character/create', character);
  }

  getStoryCharacterList(storyId: string): Observable<Character[]> {
    return this.http.get<Character[]>('character/list/story/' + storyId);
  }

  getPlayerCharacterList(playerId: string): Observable<Character[]> {
    return this.http.get<Character[]>('character/list/player/' + playerId);
  }
}
