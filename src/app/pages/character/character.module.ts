import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterOverviewComponent } from './character-overview/character-overview.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { CharacterEditorComponent } from './character-editor/character-editor.component';
import { CharacterRoutingModule } from './character-routing.module';
import { AbilityInputComponent } from 'src/app/shared/ability-input/ability-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from 'src/app/shared/form-input/form-input.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@NgModule({
  declarations: [
    CharacterOverviewComponent,
    CharacterDisplayComponent,
    CharacterEditorComponent,
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    AbilityInputComponent,
    FormInputComponent,
    ReactiveFormsModule,
    ButtonComponent
  ],
  exports: [CharacterEditorComponent],
})
export class CharacterModule {}
