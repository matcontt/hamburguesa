import { createContext, useContext } from 'react';
import { IngredientType } from '../../../lib/core/config';

interface BurgerContextType {
  stack: IngredientType[];
  addIngredient: (type: IngredientType) => void;
  removeIngredient: (index: number) => void;
  totalPrice: number;
  resetBurger: () => void;
}

export const BurgerContext = createContext<BurgerContextType | undefined>(undefined);

export const useBurger = () => {
  const context = useContext(BurgerContext);
  if (!context) throw new Error('useBurger debe usarse dentro de BurgerProvider');
  return context;
};
