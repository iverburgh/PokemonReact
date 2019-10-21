import { Ability } from './ability';
import { Species } from './species';
import { GameIndex } from './gameIndex';
import { Move } from './move';
import { Sprites } from './sprites';
import { Stat } from './stat';
import { Type } from './type';

export interface Pokemon {
    abilities:                Ability[];
    base_experience:          number;
    forms:                    Species[];
    game_indices:             GameIndex[];
    height:                   number;
    held_items:               any[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    species:                  Species;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}