import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterLookup, Chronicle } from 'src/app/core/interface/character';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input({ required: true }) list: any[] = [];
  @Input({ required: true }) type: 'CHARACTER' | 'STORY' = 'CHARACTER';
  @Output() selected = new EventEmitter<number>();

  selectedId?: number;

  select(id: number) {
    this.selected.emit(id);
  }
}
