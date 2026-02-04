import React from 'react';
import { useGLTF } from '@react-three/drei/native';
import { IngredientType } from '../../lib/core/config';

// Altura aproximada de cada ingrediente para el apilado
const INGREDIENT_HEIGHTS: Record<IngredientType, number> = {
  BUN_BOTTOM: 0.25,
  MEAT: 0.18,
  CHICKEN: 0.22,
  CHEESE: 0.05,
  BUN_TOP: 0.20,
};

export default function BurgerModel({ stack }: { stack: IngredientType[] }) {
  // Cargamos tu archivo de Blender
  const { nodes } = useGLTF(require('../../assets/models/hamburguesa.glb')) as any;
  
  let currentY = 0;

  return (
    <group dispose={null}>
      {stack.map((ingredient, index) => {
        const height = INGREDIENT_HEIGHTS[ingredient];
        const positionY = currentY;
        currentY += height; // El siguiente ingrediente irá más arriba

        // IMPORTANTE: 'nodes.NombreEnBlender' debe coincidir con tu exportación
        // Por ejemplo, si en Blender tu carne se llama "meat_mesh"
        const meshName = ingredient.toLowerCase(); 

        return (
          <primitive
            key={`${ingredient}-${index}`}
            object={nodes[meshName].clone()} // Clonamos la pieza para poder repetir ingredientes
            position={[0, positionY, 0]}
          />
        );
      })}
    </group>
  );
}