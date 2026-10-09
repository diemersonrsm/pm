import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ setTelaAtual }) {
  const botoes = [
    { tela: 'cadastroalunos', texto: 'Cadastrar Aluno' },
    { tela: 'cadastroProfessores', texto: 'Cadastrar Professores' },
    { tela: 'cadastroCoordenadores', texto: 'Cadastrar Coordenadores' },
    { tela: 'Sobre', texto: 'Sobre' },
    { tela: 'entrar', texto: 'Entrar' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>APP Scholar</Text>
      <Text style={styles.subtitulo}>
        Sistema Acadêmico Mobile
      </Text>
      <Text style={styles.tituloSecundario}>
        Painel do Banco
      </Text>

      {botoes.map((botao) => (
        <TouchableOpacity
          key={botao.tela}
          style={styles.botao}
          onPress={() => setTelaAtual(botao.tela)}
        >
          <Text style={styles.textoBotao}>
            {botao.texto}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 12,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'center',
  },
  tituloSecundario: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 20,
  },
  botao: {
    width: '90%',
    backgroundColor: '#8F00FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF007F',
    elevation: 5,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});