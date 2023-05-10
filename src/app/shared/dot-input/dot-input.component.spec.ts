import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotInputComponent } from "./DotInputComponent";

describe('DotInputComponent', () => {
  let component: DotInputComponent;
  let fixture: ComponentFixture<DotInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DotInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
