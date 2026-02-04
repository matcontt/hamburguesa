import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useBurgerBuilder } from '../../modules/builder/hooks/useBurgerBuilder';
import IngredientButton from '../atoms/IngredientButton';

export default function IngredientSelector() {
  const { availableIngredients, addIngredient, isAtLimit, getIngredientCount } = useBurgerBuilder();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Añadir Ingredientes</Text>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        {availableIngredients.map((item) => {
          // No permitimos añadir más panes base (ya hay uno por defecto)
          if (item.id === 'BUN_BOTTOM') return null;

          return (
            <IngredientButton
              key={item.id}
              ingredient={item}
              onPress={() => addIngredient(item.id)}
              disabled={isAtLimit(item.id)}
              count={getIngredientCount(item.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { color: '#888', fontSize: 12, letterSpacing: 1, marginBottom: 15, textTransform: 'uppercase' },
  list: { paddingBottom: 20 }
});