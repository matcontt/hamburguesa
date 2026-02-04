import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { UI_COLORS } from '../../lib/core/config';
import BurgerCanvas from '../organisms/BurgerCanvas';
import IngredientSelector from '../molecules/IngredientSelector';
import { useBurgerBuilder } from '../../modules/builder/hooks/useBurgerBuilder';
import { Text } from 'react-native';

export default function BurgerBuilderTemplate() {
  const { totalPrice } = useBurgerBuilder();

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Organismo: Visualizador 3D */}
      <View style={styles.visualizerContainer}>
        <BurgerCanvas />
      </View>

      {/* 2. Información de Precio (Atomo de UI rápida) */}
      <View style={styles.priceHeader}>
        <Text style={styles.priceLabel}>TOTAL</Text>
        <Text style={styles.priceValue}>${totalPrice.toFixed(2)}</Text>
      </View>

      {/* 3. Molécula: Panel de Control */}
      <View style={styles.selectorContainer}>
        <IngredientSelector />
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
    flex: 1.2, // El 3D ocupa un poco más de la mitad
  },
  priceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  priceLabel: {
    color: '#666',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  priceValue: {
    color: UI_COLORS.primary,
    fontSize: 32,
    fontWeight: '200',
  },
  selectorContainer: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});