import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { UI_COLORS, IngredientCofig } from '../../lib/core/config';

interface Props {
  ingredient: IngredientCofig;
  onPress: () => void;
  disabled?: boolean;
  count: number;
}

export default function IngredientButton({ ingredient, onPress, disabled, count }: Props) {
  return (
    <TouchableOpacity 
      style={[styles.button, disabled && styles.disabled]} 
      onPress={onPress}
      disabled={disabled}
    >
      <View style={[styles.colorIndicator, { backgroundColor: ingredient.color }]} />
      <View style={styles.content}>
        <Text style={styles.name}>{ingredient.name}</Text>
        <Text style={styles.price}>+ ${ingredient.price.toFixed(2)}</Text>
      </View>
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: UI_COLORS.surface,
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  disabled: { opacity: 0.4 },
  colorIndicator: { width: 4, height: 30, borderRadius: 2, marginRight: 12 },
  content: { flex: 1 },
  name: { color: UI_COLORS.text, fontWeight: '600', fontSize: 14 },
  price: { color: UI_COLORS.primary, fontSize: 12, marginTop: 2 },
  badge: {
    backgroundColor: UI_COLORS.primary,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: { color: '#000', fontSize: 10, fontWeight: 'bold' }
});