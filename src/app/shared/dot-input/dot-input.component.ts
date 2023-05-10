import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dot-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dot-input.component.html',
  styleUrls: ['./dot-input.component.scss'],
})
export class DotInputComponent implements OnChanges {
  @Input() max: number = 5;
  @Input() value: number = 0;
  @Output() scoreValue = new EventEmitter<number>();

  nums: number[];

  constructor(private ref: ChangeDetectorRef) {
    this.nums = Array.from(Array(this.max).keys()).map((i) => i + 1);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['max']) {
      this.nums = Array.from(Array(this.max + 1).keys()).map((i) => i + 1);
    }
  }

  updateValue(value: number) {
    if (this.value === value) {
      this.value = value - 1;
    } else {
      this.value = value;
    }
    this.scoreValue.emit(this.value);
    this.ref.markForCheck();
  }

  markForCheck(num: number): boolean {
    return num <= this.value;
  }
}
