export interface IPokemon {
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
}