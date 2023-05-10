import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatSheetComponent } from './combat-sheet.component';

describe('CombatSheetComponent', () => {
  let component: CombatSheetComponent;
  let fixture: ComponentFixture<CombatSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CombatSheetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CombatSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
