import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Chronicle } from '../interface/character';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  http = inject(HttpService);

  getStoryList(): Observable<Chronicle[]> {
    return this.http.get<Chronicle[]>('chronicle');
  }
}
