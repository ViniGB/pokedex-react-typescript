import { render, screen } from '@testing-library/react';
import { Favorites } from '../../pages/Favorites';
import { BrowserRouter } from 'react-router-dom';
import { favoritePokemons } from '../../tests/mocks/pokemons';

describe('<Favorites />', () => {
  const renderComponent = () => (render(
    <BrowserRouter>
      <Favorites />
    </BrowserRouter>
  ));

  const mockKey = 'favoritePokemons';

  beforeEach(() => {
    window.localStorage.setItem(mockKey, JSON.stringify(favoritePokemons))
  })

  afterEach(() => {
    window.localStorage.clear();
  });

  it('Favorite Pokemons should be rendered', () => {
    renderComponent();

    const favoritePokemons = screen.getAllByTestId('fav-pokemons');
    expect(favoritePokemons[0]).toBeInTheDocument();
    expect(favoritePokemons[1]).toBeInTheDocument();

    const firstPokeNameSpan = screen.getByTestId('bulbasaur-name-span');
    const secondPokeNameSpan = screen.getByTestId('venusaur-name-span');

    expect(firstPokeNameSpan).toBeInTheDocument();
    expect(secondPokeNameSpan).toBeInTheDocument();
  });
});