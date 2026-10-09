import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SobreScreen() {
  return (
    <View style={styles.conteudoCentral}>
      <Text style={styles.titulo}>
        Sobre o APP Scholar
      </Text>

      <Text style={styles.caixa}>
        Versão 1.0.0 - Desenvolvido para fins acadêmicos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudoCentral: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
    marginBottom: 10,
  },
  caixa: {
    width: '90%',
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});