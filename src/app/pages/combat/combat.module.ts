import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatOverviewComponent } from './combat-overview/combat-overview.component';
import { CombatSheetComponent } from './combat-sheet/combat-sheet.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { AbilityInputComponent } from 'src/app/shared/ability-input/ability-input.component';

@NgModule({
  declarations: [CombatOverviewComponent, CombatSheetComponent],
  imports: [CommonModule, ButtonComponent, AbilityInputComponent],
  exports: [CombatOverviewComponent],
})
export class CombatModule {}
