import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterLookup, Vampire } from '../interface/character';
import { HttpService } from './http.service';
import { HttpParams, HttpParamsOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  http = inject(HttpService);
  baseUrl: string = 'Character/';

  constructor() {}

  getCharacterList(player: string = 'Tjalling'): Observable<CharacterLookup[]> {
    return this.http.get<CharacterLookup[]>(
      this.baseUrl + 'GetAllCharactersByPlayer',
      { 'player': player }
    );
  }

  getCharacter(id: number): Observable<Vampire> {
    return this.http.get<Vampire>(this.baseUrl + 'GetAllCharactersByID/' + id);
  }

  deleteCharacter(id: number) {
    return this.http.delete<boolean>(this.baseUrl + 'delete', id);
  }

  updateCharacter(character: Vampire): Observable<boolean> {
    return this.http.put<boolean>(
      this.baseUrl + 'character/' + character.id,
      character
    );
  }

  createCharacter(character: Vampire): Observable<boolean> {
    return this.http.post<boolean>(
      this.baseUrl + 'character/create',
      character
    );
  }

  // getStoryCharacterList(storyId: number): Observable<CharacterLookup[]> {
  //   return this.http.get<CharacterLookup[]>(
  //     this.baseUrl + 'GetAllCharactersByChronicle/' + storyId
  //   );
  // }

  gtAllCharactersByChronicle(
    chronicle: string = 'Rob'
  ): Observable<CharacterLookup[]> {
    return this.http.get<CharacterLookup[]>(
      this.baseUrl + 'GetAllCharactersByChronicle?chronicle=' + chronicle
    );
  }

  getStoryPlayerList(storyId: number): Observable<CharacterLookup[]> {
    return this.http.get<CharacterLookup[]>(
      this.baseUrl + 'character/player/' + storyId
    );
  }
}
