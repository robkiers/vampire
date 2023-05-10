import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DotInputComponent } from '../dot-input/dot-input.component';

@Component({
  selector: 'app-ability-input',
  standalone: true,
  imports: [CommonModule, DotInputComponent],
  templateUrl: './ability-input.component.html',
  styleUrls: ['./ability-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AbilityInputComponent,
    },
  ],
})
export class AbilityInputComponent implements ControlValueAccessor {
  @Input() max: number = 5;
  @Input() label: string = '';

  value = { score: 0, specialty: '' };

  onChange = (value: { score: number; specialty: string }) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  writeValue(value: any) {
    if (typeof value === 'number') {
      this.value = { ...this.value, score: value };
    }
    if (value.score) {
      this.value = { ...this.value, score: value.score };
    }
    if (value.specialty) {
      this.value = { ...this.value, specialty: value.specialty };
    }
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  onScoreChange(e: any): void {
    if (this.disabled) {
      return;
    }
    this.value = { ...this.value, score: e };
    this.onChange(this.value);
  }

  onSpecialtyChange(e: any): void {
    if (this.disabled) {
      return;
    }
    this.value = { ...this.value, specialty: e.target.value };
    this.onChange(this.value);
  }

  // validate(control: AbstractControl): ValidationErrors | null {
  //   const quantity = control.value;
  //   if (quantity <= 0) {
  //     return {
  //       mustBePositive: {
  //         quantity
  //       }
  //     };
  //   }
  // }
}
