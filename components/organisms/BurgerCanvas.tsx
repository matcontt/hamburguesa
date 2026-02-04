import React, { Suspense } from 'react';
import { View, StyleSheet } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei/native';
import { useBurgerBuilder } from '../../modules/builder/hooks/useBurgerBuilder';
import BurgerModel from '../molecules/BurgerModel'; // Lo crearemos a continuación

export default function BurgerCanvas() {
  const { stack } = useBurgerBuilder();

  return (
    <View style={styles.container}>
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 40 }}
      >
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} intensity={1.5} castShadow />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
            {/* El modelo recibe el stack para clonar piezas */}
            <BurgerModel stack={stack} />
          </Float>
          
          <ContactShadows 
            position={[0, -1, 0]} 
            opacity={0.5} 
            scale={10} 
            blur={2} 
            far={4.5} 
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400, // Altura inicial, luego la ajustaremos en el Template
  },
});