import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

import HomeScreen from './src/screens/homeScreen';
import CadastroAlunosScreen from './src/screens/CadastroAlunoScreen';
import SobreScreen from './src/screens/SobreScreen';
import TabBar from './src/components/TabBar';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('Home');

  const renderConteudo = () => {
    switch (telaAtual) {
      case 'Home':
        return <HomeScreen setTelaAtual={setTelaAtual} />;

      case 'cadastroalunos':
        return <CadastroAlunosScreen />;

      case 'Sobre':
        return <SobreScreen />;

      case 'cadastroProfessores':
        return (
          <View style={styles.center}>
            <Text style={styles.txt}>
              Cadastro de Professores
            </Text>
          </View>
        );

      case 'cadastroCoordenadores':
        return (
          <View style={styles.center}>
            <Text style={styles.txt}>
              Cadastro de Coordenadores
            </Text>
          </View>
        );

      case 'entrar':
        return (
          <View style={styles.center}>
            <Text style={styles.txt}>Entrar</Text>
          </View>
        );

      default:
        return <HomeScreen setTelaAtual={setTelaAtual} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaConteudo}>
        {renderConteudo()}
      </View>

      <TabBar
        telaAtual={telaAtual}
        setTelaAtual={setTelaAtual}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  areaConteudo: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});