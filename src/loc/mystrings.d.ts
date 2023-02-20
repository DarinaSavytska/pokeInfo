declare interface ISpiMyPokemonInfoStrings {
  title: string;
  task: {
    priority: string;
  };
}

declare module "SpiMyPokemonInfoStrings" {
  const strings: ISpiMyPokemonInfoStrings;
  export = strings;
}
