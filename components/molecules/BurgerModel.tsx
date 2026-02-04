import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei/native';
import { IngredientType } from '../../lib/core/config';

// Ajustamos alturas según tus piezas de Blender
const HEIGHTS: Record<string, number> = {
  panAbajo: 0.3,
  carne1: 0.2,
  pollo1: 0.25,
  queso1: 0.08,
  panArriba: 0.3,
};

export default function BurgerModel({ stack }: { stack: IngredientType[] }) {
  const { nodes } = useGLTF(require('../../assets/models/hamburguesa.glb')) as any;

  const parts = useMemo(() => {
    let currentY = 0;
    return stack.map((type, index) => {
      // Buscamos directamente el nombre que ves en tu Outliner de Blender
      const mesh = nodes[type]; 
      
      if (!mesh) {
        console.warn(`No existe la pieza: ${type}`);
        return null;
      }

      const pos: [number, number, number] = [0, currentY, 0];
      currentY += HEIGHTS[type] || 0.2;

      return { id: `${type}-${index}`, mesh: mesh.clone(), pos };
    });
  }, [stack, nodes]);

  return (
    <group>
      {parts.map((p) => p && (
        <primitive key={p.id} object={p.mesh} position={p.pos} />
      ))}
    </group>
  );
}