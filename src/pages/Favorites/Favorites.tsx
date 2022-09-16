import React from 'react';
import { Favcards } from '../../components/Favcards';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';

export const Favorites: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <Favcards />
    </>
  );
}