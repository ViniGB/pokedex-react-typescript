import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Nav } from '../../components/Nav';

describe('<Nav />', () => {
  it('Nav should have two links', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole('link', { name: /Pokedéx/i });
    const favoritesLink = screen.getByRole('link', { name: /Favorites/i });

    expect(homeLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
  });
});