import { render, screen } from '@testing-library/react';

import { Header } from '../../components/Header';

describe('<Header />', () => {
  it('Header should have Pokemon as Title', () => {
    render(
      <Header />
    );

    const headerTitle = screen.getByRole('heading', { level: 1 });

    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle.textContent).toBe('Pokemon');
  });

  it('Header should have Pokemon images', () => {
    render(
      <Header />
    );

    const squirtleAlt = screen.getByAltText('squirtle');
    const bulbasaurAlt = screen.getByAltText('bulbasaur');
    const charmanderAlt = screen.getByAltText('charmander');
    const blastoiseAlt = screen.getByAltText('blastoise');
    const venusaurAlt = screen.getByAltText('venusaur');
    const charizardAlt = screen.getByAltText('charizard');

    expect(squirtleAlt).toHaveAttribute('src', 'squirtle.png');
    expect(bulbasaurAlt).toHaveAttribute('src', 'bulbasaur.png');
    expect(charmanderAlt).toHaveAttribute('src', 'charmander.png');
    expect(blastoiseAlt).toHaveAttribute('src', 'blastoise.png');
    expect(venusaurAlt).toHaveAttribute('src', 'venusaur.png');
    expect(charizardAlt).toHaveAttribute('src', 'charizard.png');
  });
});