import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function TabBar({ telaAtual, setTelaAtual }) {
  const abas = [
    { id: 'Home', label: 'Início' },
    { id: 'cadastroalunos', label: 'Alunos' },
    { id: 'cadastroProfessores', label: 'Profs' },
    { id: 'cadastroCoordenadores', label: 'Coords' },
    { id: 'Sobre', label: 'Sobre' },
    { id: 'entrar', label: 'Entrar' },
  ];

  return (
    <View style={styles.barraAbas}>
      {abas.map((aba) => (
        <TouchableOpacity
          key={aba.id}
          style={[
            styles.aba,
            telaAtual === aba.id && styles.abaAtiva,
          ]}
          onPress={() => setTelaAtual(aba.id)}
        >
          <Text style={styles.textoAba}>
            {aba.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  barraAbas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#1C1C1E',
    borderTopWidth: 1,
    borderTopColor: '#3A3A3C',
    minHeight: 65,
  },
  aba: {
    flexGrow: 1,
    flexBasis: '16%',
    minHeight: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF007F',
    paddingHorizontal: 4,
  },
  abaAtiva: {
    backgroundColor: '#2C2C2E',
    borderTopWidth: 3,
    borderTopColor: '#8F00FF',
  },
  textoAba: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
});