import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Chronicle } from '../interface/character';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  http = inject(HttpService);
  baseUrl: string = 'Chronicle/';

  getStoryList(): Observable<Chronicle[]> {
    return this.http.get<Chronicle[]>(this.baseUrl + 'GetAllChronicles');
  }

  getStory(id: number): Observable<Chronicle> {
    return this.http.get<Chronicle>(this.baseUrl + 'GetChronicleById/' + id);
  }

  deleteStory(id: number) {
    return this.http.delete<boolean>(this.baseUrl + 'delete', id);
  }

  updateStory(chronicle: Chronicle): Observable<boolean> {
    return this.http.put<boolean>(this.baseUrl + chronicle.id, chronicle);
  }

  createStory(chronicle: Chronicle): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'AddChronicle', chronicle);
  }
}
