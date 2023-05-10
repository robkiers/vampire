import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { CharacterModule } from '../character/character.module';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ListComponent } from 'src/app/shared/list/list.component';
import { CombatModule } from '../combat/combat.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    CharacterModule,
    CombatModule,
    ButtonComponent,
    ListComponent
  ],
})
export class OverviewModule {}
