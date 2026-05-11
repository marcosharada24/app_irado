import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cadastrarUsuario } from '../database/database';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter();

  async function cadastrar() {
    if (!nome || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const sucesso = cadastrarUsuario(nome, senha);

    if (sucesso) {
      await AsyncStorage.setItem('nm_user', nome);

      Alert.alert('Sucesso', 'Usuário cadastrado!');

      router.replace('/produto');
    } else {
      Alert.alert('Erro', 'Usuário já existe');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
});

        editable={false}
        />

        <textInput
        placehoder="senha"
    )
}
