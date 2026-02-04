import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useBurgerBuilder } from '../../modules/builder/hooks/useBurgerBuilder';
import { UI_COLORS, INGREDIENTS } from '../../lib/core/config';

export default function OrderSummary() {
  const { stack, totalPrice, canCheckout, resetBurger } = useBurgerBuilder();

  // Función para procesar la compra (Simulación de Checkout)
  const handlePurchase = () => {
    Alert.alert(
      "¡Pedido Recibido!",
      `Tu hamburguesa de $${totalPrice.toFixed(2)} está en camino.`,
      [{ text: "¡Genial!", onPress: () => resetBurger() }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.label}>TU CREACIÓN</Text>
          <Text style={styles.ingredientSummary}>
            {stack.length} Ingredientes seleccionados
          </Text>
        </View>
        
        <TouchableOpacity 
          style={[styles.buyButton, !canCheckout && styles.disabledButton]}
          onPress={handlePurchase}
          disabled={!canCheckout}
        >
          <Text style={styles.buyButtonText}>ORDENAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#222',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#888',
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  ingredientSummary: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 2,
  },
  buyButton: {
    backgroundColor: UI_COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#333',
    opacity: 0.5,
  },
  buyButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});