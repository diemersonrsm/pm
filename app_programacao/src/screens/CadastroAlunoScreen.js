import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

export default function CadastroAlunosScreen() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [infoAluno, setInfoAluno] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [ruaAluno, setRuaAluno] = useState('');
  const [idAluno, setIdAluno] = useState('');

  const lidarComEnvio = () => {
    if (nomeAluno.trim() === '') {
      Alert.alert(
        'Aviso',
        'Por favor, digite o nome do aluno antes de salvar!'
      );
      return;
    }

    Alert.alert(
      'Sucesso!',
      `Aluno gravado:\n` +
      `Nome: ${nomeAluno}\n` +
      `Informações: ${infoAluno}\n` +
      `Nascimento: ${dataNasc}\n` +
      `Rua: ${ruaAluno}\n` +
      `ID: ${idAluno}`
    );

    // Limpa os campos depois da confirmação
    setNomeAluno('');
    setInfoAluno('');
    setDataNasc('');
    setRuaAluno('');
    setIdAluno('');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.conteudoScroll}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titulo}>
        Cadastro de Alunos
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do aluno..."
        placeholderTextColor="#999"
        value={nomeAluno}
        onChangeText={setNomeAluno}
      />

      <TextInput
        style={styles.input}
        placeholder="Informações do aluno..."
        placeholderTextColor="#999"
        value={infoAluno}
        onChangeText={setInfoAluno}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento (DD/MM/AAAA)"
        placeholderTextColor="#999"
        value={dataNasc}
        onChangeText={setDataNasc}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a rua do aluno..."
        placeholderTextColor="#999"
        value={ruaAluno}
        onChangeText={setRuaAluno}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o ID do aluno..."
        placeholderTextColor="#999"
        value={idAluno}
        onChangeText={setIdAluno}
      />

      <TouchableOpacity
        style={styles.botaoSalvar}
        onPress={lidarComEnvio}
      >
        <Text style={styles.textoBotao}>
          Salvar Aluno
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteudoScroll: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 16,
    paddingVertical: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#BDC3C7',
    fontSize: 16,
    color: '#000000',
  },
  botaoSalvar: {
    width: '90%',
    backgroundColor: '#2ECC71',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#27AE60',
    elevation: 5,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});