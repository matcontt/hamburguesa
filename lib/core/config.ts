export type IngredientType = 'carne1' | 'pollo1' | 'queso1' | 'panAbajo' | 'panArriba';

export interface IngredientCofig {
  id: IngredientType;
  name: string;
  price: number;
  max: number;
  color: string;
}

export const INGREDIENTS: Record<string, any> = {
    panAbajo: { id: 'panAbajo', name: 'Pan Base', price: 2.0, max: 1, color: '#D2B48C' },
    carne1:   { id: 'carne1',   name: 'Carne Angus', price: 4.5, max: 4, color: '#5D2906' },
    pollo1:   { id: 'pollo1',   name: 'Pollo Crispy', price: 3.5, max: 2, color: '#F39C12' },
    queso1:   { id: 'queso1',   name: 'Queso Cheddar', price: 1.5, max: 2, color: '#F1C40F' },
    panArriba: { id: 'panArriba', name: 'Pan Tapa', price: 1.0, max: 1, color: '#D2B48C' },
  };

export const UI_COLORS = {
  primary: '#E67E22', // Naranja Hamburguesa
  background: '#0A0A0A',
  surface: '#1A1A1A',
  text: '#FFFFFF',
};