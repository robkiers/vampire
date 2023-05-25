export class BaseCharacter {
  id: number = 0;
  chronicleId: number = 0;
  characterType: 'VAMPIRE' | 'MAGE' | 'HUMAN' = 'VAMPIRE';
  characterEra: Era = 'MEDIEVAL';
  isPlayer: boolean = false;
  characterName: string = '';
  playerName: string = '';
  chronicleName: string = '';
}

export class Vampire extends BaseCharacter {
  nature: string = '';
  demeanor: string = '';
  concept: string = '';

  clan: string = '';
  generation: number = 13;
  sire: string = '';

  // ATTRIBUTES
  strength: number = 0;
  dexterity: number = 0;
  stamina: number = 0;

  charisma: number = 0;
  manipulation: number = 0;
  appearance: number = 0;

  perception: number = 0;
  intelligence: number = 0;
  wits: number = 0;

  // TALENTS
  alertness: Ability = {
    score: 1,
    specialty: 'ambush',
  };
  athletics: Ability = {
    score: 0,
  };
  awareness: Ability = {
    score: 0,
  };
  brawl: Ability = {
    score: 0,
  };
  empathy: Ability = {
    score: 0,
  };
  expression: Ability = {
    score: 0,
  };
  intimidation: Ability = {
    score: 0,
  };
  leadership: Ability = {
    score: 0,
  };
  legerdemain: Ability = {
    score: 0,
  };
  subterfuge: Ability = {
    score: 0,
  };
  customTalent?: Ability[];

  // SKILLS
  animalKen: Ability = {
    score: 0,
  };
  archery: Ability = {
    score: 0,
  };
  commerce: Ability = {
    score: 0,
  };
  crafts?: Ability[];
  etiquette: Ability = {
    score: 0,
  };
  melee: Ability = {
    score: 0,
  };
  performance: Ability = {
    score: 0,
  };
  ride: Ability = {
    score: 0,
  };
  stealth: Ability = {
    score: 0,
  };
  survival: Ability = {
    score: 0,
  };
  customSkill?: Ability[];

  // KNOWLEDGE
  academics: Ability = {
    score: 0,
  };
  enigmas: Ability = {
    score: 0,
  };
  hearthWisdom: Ability = {
    score: 0,
  };
  investigation: Ability = {
    score: 0,
  };
  law: Ability = {
    score: 0,
  };
  medicine: Ability = {
    score: 0,
  };
  occult: Ability = {
    score: 0,
  };
  politics: Ability = {
    score: 0,
  };
  seneschal: Ability = {
    score: 0,
  };
  theology: Ability = {
    score: 0,
  };
  customKnowledge?: Ability[];

  // ADVANTAGES
  disciplines?: Advantage[];
  backgrounds?: Advantage[];
  continence: Continence = {
    type: 'CONSCIENCE',
    score: 0,
  };
  disposition: Disposition = {
    type: 'SELF_CONTROL',
    score: 0,
  };
  courage: number = 0;

  // OTHER
  otherTraits?: string[] = [''];
  roadName: string = '';
  roadRating: number = 5;
  roadAura: string = '';

  willpower = {
    total: 5,
    used: 0,
  };
  bloodPool = {
    total: 10,
    used: 0,
  };
  health = {
    bruised: 0,
    lethal: 0,
    aggravated: 0,
  };

  getGeneral() {
    return {
      name: this.characterName,
      player: this.playerName,
      chronicle: this.chronicleName,
      nature: this.nature,
      demeanor: this.demeanor,
      concept: this.concept,
      clan: this.clan,
      generation: this.generation,
      sire: this.sire,
    };
  }

  getPhysical() {
    return {
      strength: this.strength,
      dexterity: this.dexterity,
      stamina: this.stamina,
    };
  }

  getSocial() {
    return {
      charisma: this.charisma,
      manipulation: this.manipulation,
      appearance: this.appearance,
    };
  }

  getMental() {
    return {
      perception: this.perception,
      intelligence: this.intelligence,
      wits: this.wits,
    };
  }

  getTalents() {
    return {
      alertness: this.alertness,
      athletics: this.athletics,
      awareness: this.awareness,
      brawl: this.brawl,
      empathy: this.empathy,
      expression: this.expression,
      intimidation: this.intimidation,
      leadership: this.leadership,
      legerdemain: this.legerdemain,
      subterfuge: this.subterfuge,
    };
  }

  getSkills() {}

  getKnowledge() {}

  getDisciplines() {}

  getBackgrounds() {}

  getVirtues() {}

  getOther() {}

  getCombatStats() {
    const initiative = 0;
    const celerity = 0;
    const fortitude = 0;
    const potence = 0;

    return {
      strength: this.strength,
      dexterity: this.dexterity,
      stamina: this.stamina,
      wits: this.wits,
      athletics: this.athletics,
      brawl: this.brawl,
      archery: this.archery,
      melee: this.melee,
    };
  }
}

export interface Ability {
  score: number;
  specialty?: string;
}

export interface Advantage {
  name: string;
  score: number;
}

export interface Continence {
  type: 'CONSCIENCE' | 'CONVICTION';
  score: number;
}

export interface Disposition {
  type: 'SELF_CONTROL' | 'INSTINCT';
  score: number;
}
export type Era = 'MODERN' | 'MEDIEVAL';

export interface CharacterLookup {
  name: string;
  id: number;
  chronicle: Chronicle[];
  era: 'MEDIEVAL';
  version: 'V20' | 'V5' | 'V2';
  type: 'VAMPIRE';
  clan: string;
}

export interface Chronicle {
  name: string;
  id: number;
  era: Era;
  storyTeller: string;
  version: 'V20' | 'V5' | 'V2';
  type: 'VAMPIRE' | 'MAGE' | 'HUMAN';
}

// interface IGetUserFullName {
//   (user: IUser): string;
// }
// const getUserFullName: IGetUserFullName = (user) => `${user.firstName} ${user.lastName}`;

// type TGetUserFullName = (user: TUser) => string;
// const getUserFullName: TGetUserFullName = (user) => `${user.firstName} ${user.lastName}`;
