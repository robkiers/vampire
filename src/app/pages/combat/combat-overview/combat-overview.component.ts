import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CombatSheetComponent } from '../combat-sheet/combat-sheet.component';

@Component({
    selector: 'app-combat-overview',
    templateUrl: './combat-overview.component.html',
    styleUrls: ['./combat-overview.component.scss'],
    standalone: true,
    imports: [CombatSheetComponent, ButtonComponent]
})
export class CombatOverviewComponent {

}
