import React, { createContext, useContext, useState, useMemo } from 'react';
import { INGREDIENTS, IngredientType } from '../../../lib/core/config';

interface BurgerContextType {
  stack: IngredientType[]; // Ejemplo: ['BUN_BOTTOM', 'MEAT', 'CHEESE']
  addIngredient: (type: IngredientType) => void;
  removeIngredient: (index: number) => void;
  totalPrice: number;
  resetBurger: () => void;
}

const BurgerContext = createContext<BurgerContextType | undefined>(undefined);

export const BurgerProvider = ({ children }: { children: React.ReactNode }) => {
  // Iniciamos la hamburguesa solo con el pan de abajo
  const [stack, setStack] = useState<IngredientType[]>(['BUN_BOTTOM']);

  const addIngredient = (type: IngredientType) => {
    // Contamos cuántos ingredientes de este tipo ya existen
    const count = stack.filter(i => i === type).length;
    
    // Verificamos el límite definido en nuestra configuración
    if (count < INGREDIENTS[type].max) {
      // Insertamos antes del pan superior si ya existe, o al final
      setStack(prev => {
        const newStack = [...prev];
        newStack.push(type);
        return newStack;
      });
    }
  };

  const removeIngredient = (index: number) => {
    // No permitimos quitar el pan base (índice 0)
    if (index === 0) return;
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

export const useBurger = () => {
  const context = useContext(BurgerContext);
  if (!context) throw new Error('useBurger debe usarse dentro de BurgerProvider');
  return context;
};