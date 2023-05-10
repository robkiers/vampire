import { Component } from '@angular/core';
import { AbilityInputComponent } from '../../../shared/ability-input/ability-input.component';

@Component({
    selector: 'app-combat-sheet',
    templateUrl: './combat-sheet.component.html',
    styleUrls: ['./combat-sheet.component.scss'],
    standalone: true,
    imports: [AbilityInputComponent]
})
export class CombatSheetComponent {

}
