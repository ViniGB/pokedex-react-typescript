import React from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';

export const Details: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <Card />
    </>
  );
}