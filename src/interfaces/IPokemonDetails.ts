export interface IPokemonDetails {
  id: number;
  name: string;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  sprites: {
    other: {
      home: {
        front_default: string;
      }
    }
  };
  base_experience: number;
  height: number;
  held_items: [
    {
      item: {
        name: string;
      }
    }
  ];
  weight: number;
  abilities: [
    {
      ability: {
        name: string;
      }
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      }
    }
  ];
}