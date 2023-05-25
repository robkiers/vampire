import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Era } from '../interface/character';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class TraitService {
  http = inject(HttpService);

  constructor() {}

  getDisciplineList(era: Era): Observable<Trait[]> {
    return this.http.get<Trait[]>('discipline/' + era);
  }

  getBackgroundList(era: Era): Observable<Trait[]> {
    return this.http.get<Trait[]>('background/' + era);
  }

  getRoadList(era: Era): Observable<Trait[]> {
    return this.http.get<Trait[]>('road/' + era);
  }

  getMeritList(era: Era): Observable<Trait[]> {
    return this.http.get<Trait[]>('merit/' + era);
  }

  getFlawList(era: Era): Observable<Trait[]> {
    return this.http.get<Trait[]>('flaw/' + era);
  }
}

export interface Trait {
  id: number;
  name: string;
  oneLine: string;
  description: string;
}
