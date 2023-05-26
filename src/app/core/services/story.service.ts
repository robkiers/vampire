import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Chronicle } from '../interface/character';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  http = inject(HttpService);

  getStory(id: number): Observable<Chronicle> {
    return this.http.get<Chronicle>('story/' + id);
  }

  deleteStory(id: number) {
    return this.http.delete<boolean>('story/delete', id);
  }

  updateStory(chronicle: Chronicle): Observable<boolean> {
    return this.http.put<boolean>('story/' + chronicle.id, chronicle);
  }

  createStory(chronicle: Chronicle): Observable<boolean> {
    return this.http.post<boolean>('story/create', chronicle);
  }

  getStoryList(): Observable<Chronicle[]> {
    return this.http.get<Chronicle[]>('story');
  }
}
