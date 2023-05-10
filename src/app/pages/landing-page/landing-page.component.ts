import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    standalone: true,
    imports: [ButtonComponent]
})
export class LandingPageComponent {

}
