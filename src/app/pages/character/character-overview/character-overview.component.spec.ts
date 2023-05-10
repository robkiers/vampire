import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterOverviewComponent } from './character-overview.component';

describe('CharacterOverviewComponent', () => {
  let component: CharacterOverviewComponent;
  let fixture: ComponentFixture<CharacterOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
