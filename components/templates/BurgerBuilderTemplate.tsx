import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { UI_COLORS } from '../../lib/core/config';
import { useBurgerBuilder } from '../../modules/builder/hooks/useBurgerBuilder';

// Importación de Organismos
import BurgerCanvas from '../organisms/BurgerCanvas';
import OrderSummary from '../organisms/OrderSummary';

// Importación de Moléculas
import IngredientSelector from '../molecules/IngredientSelector';

export default function BurgerBuilderTemplate() {
  const { totalPrice } = useBurgerBuilder();

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Área del Visualizador 3D */}
      <View style={styles.visualizerContainer}>
        <BurgerCanvas />
        
        {/* Overlay de Precio Flotante para estilo High-Class */}
        <View style={styles.floatingPrice}>
          <Text style={styles.priceLabel}>SUBTOTAL</Text>
          <Text style={styles.priceValue}>${totalPrice.toFixed(2)}</Text>
        </View>
      </View>

      {/* 2. Panel Inferior (Controles e Ingredientes) */}
      <View style={styles.sheetContainer}>
        <View style={styles.dragHandle} />
        
        <View style={styles.selectorWrapper}>
          <IngredientSelector />
        </View>

        {/* 3. Resumen y Acción de Compra */}
        <OrderSummary />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UI_COLORS.background,
  },
  visualizerContainer: {
    flex: 1.3, // Mayor espacio para apreciar la hamburguesa
    position: 'relative',
  },
  floatingPrice: {
    position: 'absolute',
    top: 20,
    right: 25,
    alignItems: 'flex-end',
  },
  priceLabel: {
    color: '#666',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  priceValue: {
    color: UI_COLORS.primary,
    fontSize: 34,
    fontWeight: '200',
  },
  sheetContainer: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
  },
  selectorWrapper: {
    flex: 1,
  },
});