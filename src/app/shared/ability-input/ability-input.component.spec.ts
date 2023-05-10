import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityInputComponent } from './ability-input.component';

describe('AbilityInputComponent', () => {
  let component: AbilityInputComponent;
  let fixture: ComponentFixture<AbilityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AbilityInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
