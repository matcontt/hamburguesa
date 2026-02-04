import React from 'react';
import { BurgerProvider } from '../modules/builder/providers/BurgerProvider';
import BurgerBuilderTemplate from '../components/templates/BurgerBuilderTemplate';

export default function App() {
  return (
    <BurgerProvider>
      <BurgerBuilderTemplate />
    </BurgerProvider>
  );
}