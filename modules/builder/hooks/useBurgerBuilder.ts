import { useBurger } from '../context/BurgerContext';
import { INGREDIENTS, IngredientType } from '../../../lib/core/config';

export const useBurgerBuilder = () => {
  const { stack, addIngredient, removeIngredient, totalPrice, resetBurger } = useBurger();

  // Helper para saber si un ingrediente alcanzó su límite máximo
  const isAtLimit = (type: IngredientType) => {
    const count = stack.filter((i) => i === type).length;
    return count >= INGREDIENTS[type].max;
  };

  // Helper para obtener cuántos ingredientes hay de un tipo (para la UI)
  const getIngredientCount = (type: IngredientType) => {
    return stack.filter((i) => i === type).length;
  };

  // Verificación rápida para habilitar el botón de "Comprar"
  const canCheckout = stack.length >= 2; // Al menos pan y algo más

  return {
    stack,
    totalPrice,
    addIngredient,
    removeIngredient,
    resetBurger,
    isAtLimit,
    getIngredientCount,
    canCheckout,
    availableIngredients: Object.values(INGREDIENTS), // Lista para mapear botones
  };
};