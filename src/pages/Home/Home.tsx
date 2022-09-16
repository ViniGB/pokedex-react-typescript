import React from 'react';
import { Cards } from '../../components/Cards';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { Search } from '../../components/Search';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <Search />
      <Cards />
    </>
  );
}