import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatOverviewComponent } from './combat-overview.component';

describe('CombatOverviewComponent', () => {
  let component: CombatOverviewComponent;
  let fixture: ComponentFixture<CombatOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
