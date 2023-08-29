export interface IInfo {
  name: string;
  url: string;
}

export interface IPokeAbilities {
  ability: IInfo;
  is_hidden: boolean;
  slot: number;
}

export interface IGames {
  game_index: number;
  version: IInfo;
}

export interface IDropItem {
  item: IInfo;
  version_details: {
    rarity: number;
    version: IInfo;
  }[];
}

export interface IPokeMoves {
  move: IInfo;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: IInfo;
    version_group: IInfo;
  };
}

export interface IType {
  slot: number;
  type: IInfo;
}

export interface ITypes {
  generation: IInfo;
  types: IType[];
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: IInfo;
}

export interface ISprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface IPokemon {
  abilities: IPokeAbilities[];
  base_experience: number;
  forms: IInfo[];
  game_indices: IGames[];
  height: number;
  held_items: IDropItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IPokeMoves[];
  name: string;
  order: number;
  past_types: ITypes[];
  species: IInfo;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
  weight: number;
}
