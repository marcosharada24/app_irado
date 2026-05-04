import { useState, useEffect } from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter();

  async function carregar() {
    try {
      const valor = await AsyncStorage.getItem('nm_user');
      if (valor) setNome(valor);
    } catch (error) {
      console.log('Erro ao carregar nome:', error);
    }
  }

  useEffect(() => {
    carregar();
    // conectarBd(); // só se essa função existir mesmo
  }, []);

  async function cadastrar() {
    if (!nome || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      // simulação de cadastro (troque pela sua função real)
      const sucesso = true;

      if (sucesso) {
        await AsyncStorage.setItem('nm_user', nome);
        Alert.alert('Sucesso', 'Senha cadastrada com sucesso!');
        router.replace('/home');
      } else {
        Alert.alert('Erro', 'Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Algo deu errado');
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Cadastro de senha</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />

      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}