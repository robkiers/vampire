import { Component, Input, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Ability, Vampire } from 'src/app/core/interface/character';
import { ButtonComponent } from '../../../shared/button/button.component';
import { AbilityInputComponent } from '../../../shared/ability-input/ability-input.component';
import { FormInputComponent } from '../../../shared/form-input/form-input.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    FormInputComponent,
    AbilityInputComponent,
    ButtonComponent,
  ],
})
export class CharacterEditorComponent {
  @Input() character: Vampire = new Vampire();
  formBuilder = inject(FormBuilder);

  controls: any;
  characterForm: FormGroup;

  constructor() {
    this.controls = [];
    this.characterForm = this.createForm();
  }
  createForm(): FormGroup {
    const controls: Control[] = Object.entries(this.character).map(
      ([key, value]) => ({
        name: key,
        label: key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
        max: 10,
        value:
          typeof value[1] === 'object'
            ? {
                score: value[1].score,
                specialty: value[1].specialty ?? '',
              }
            : value,
      })
    );
    const formGroupControls = controls.reduce(
      (acc: any, control: any) => ({
        ...acc,
        [control.name]: new FormControl(control.value, Validators.required),
      }),
      []
    );
    this.controls = this.sortArray(controls);
    return new FormGroup(formGroupControls);
  }

  sortArray(controls: Control[]): ControlsByType {
    // const emptyAdvantage = {
    //   name: '',
    //   label: '',
    //   max: 10,
    //   value: '',
    // };
    if (controlsByType.general.length === 0) {
      for (const control of controls) {
        const type = this.determineType(control.name);
        controlsByType[type].push(control);
      }
      // controlsByType['discipline'].push(emptyAdvantage);
      // controlsByType['background'].push(emptyAdvantage);
    }
    return controlsByType;
  }

  determineType(key: string): keyof ControlsByType {
    if (general.includes(key)) {
      return 'general';
    }
    if (physical.includes(key)) {
      return 'physical';
    }
    if (social.includes(key)) {
      return 'social';
    }
    if (mental.includes(key)) {
      return 'mental';
    }
    if (talent.includes(key)) {
      return 'talent';
    }
    if (skill.includes(key)) {
      return 'skill';
    }
    if (knowledge.includes(key)) {
      return 'knowledge';
    }
    if (virtue.includes(key)) {
      return 'virtue';
    }
    if (other.includes(key)) {
      return 'other';
    }
    console.warn(`Invalid control type: ${key}`);
    return 'hidden';
    // throw new Error(`Invalid control type: ${key}`);
  }

  submit() {
    console.log(this.characterForm.value);
  }
}

type Control = {
  name: string;
  label: string;
  max: number;
  value: string | Ability;
};

type ControlsByType = {
  general: Control[];
  physical: Control[];
  social: Control[];
  mental: Control[];
  talent: Control[];
  skill: Control[];
  knowledge: Control[];
  virtue: Control[];
  discipline: Control[];
  background: Control[];
  other: Control[];
  hidden: Control[];
};

const controlsByType: ControlsByType = {
  general: [],
  physical: [],
  social: [],
  mental: [],
  talent: [],
  skill: [],
  knowledge: [],
  virtue: [],
  discipline: [],
  background: [],
  other: [],
  hidden: [],
};

export const general = [
  'characterName',
  'playerName',
  'chronicle',
  'nature',
  'demeanor',
  'concept',
  'clan',
  'generation',
  'sire',
];

export const physical = ['strength', 'dexterity', 'stamina'];
export const social = ['charisma', 'manipulation', 'appearance'];
export const mental = ['perception', 'intelligence', 'wits'];

export const talent = [
  'alertness',
  'athletics',
  'awareness',
  'brawl',
  'empathy',
  'expression',
  'intimidation',
  'leadership',
  'legerdemain',
  'subterfuge',
];
export const skill = [
  'animalKen',
  'archery',
  'commerce',
  'brawl',
  'etiquette',
  'melee',
  'performance',
  'ride',
  'stealth',
  'survival',
];
export const knowledge = [
  'academics',
  'enigmas',
  'hearthWisdom',
  'investigation',
  'law',
  'occult',
  'medicine',
  'politics',
  'seneschal',
  'theology',
  'survival',
];
export const virtue = ['continence', 'disposition', 'courage'];
export const other = [
  'roadName',
  'roadRating',
  'roadAura',
  'willpower',
  'bloodPool',
];
// customTalent?: Ability[];
// crafts
// customSkill?: Ability[];
// customKnowledge?: Ability[];
