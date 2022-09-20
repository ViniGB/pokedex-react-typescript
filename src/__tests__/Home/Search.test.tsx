import axios from 'axios';
import { cleanup, render, act } from '@testing-library/react';
import { Home } from '../../pages/Home';
import { typeResults } from '../../tests/mocks/pokemons';
import { BrowserRouter } from 'react-router-dom';

describe('<Home />', () => {
  jest.mock('axios', () => {
    return {
      get: jest.fn(),
    }
  });

  const renderComponent = () => (render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  ));

  beforeEach(() => {
    jest
      .spyOn(axios, 'get')
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ data: { results: typeResults } }))
      );
  })

  afterEach(() => {
    jest.resetAllMocks();
    return cleanup;
  });

  it('Fetch functions should be called', async () => {
    renderComponent();

    await act(async () => {
      expect(axios.get).toHaveBeenCalledWith('/pokemon/?limit=30&offset=0');
      expect(axios.get).toHaveBeenCalledWith('/type/');
      expect(axios.get).toHaveBeenCalledTimes(2);
    });
  });
});