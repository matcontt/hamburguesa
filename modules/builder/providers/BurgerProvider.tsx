import React, { useState, useMemo } from 'react';
import { BurgerContext } from '../context/BurgerContext';
import { INGREDIENTS, IngredientType } from '../../../lib/core/config';

export const BurgerProvider = ({ children }: { children: React.ReactNode }) => {
  // Iniciamos la hamburguesa solo con el pan de abajo
  const [stack, setStack] = useState<IngredientType[]>(['BUN_BOTTOM']);

  const addIngredient = (type: IngredientType) => {
    const count = stack.filter(i => i === type).length;
    if (count < INGREDIENTS[type].max) {
      setStack(prev => [...prev, type]);
    }
  };

  const removeIngredient = (index: number) => {
    if (index === 0) return; // Protegemos el pan base
    setStack(prev => prev.filter((_, i) => i !== index));
  };

  const totalPrice = useMemo(() => {
    return stack.reduce((sum, type) => sum + INGREDIENTS[type].price, 0);
  }, [stack]);

  const resetBurger = () => setStack(['BUN_BOTTOM']);

  return (
    <BurgerContext.Provider value={{ stack, addIngredient, removeIngredient, totalPrice, resetBurger }}>
      {children}
    </BurgerContext.Provider>
  );
};