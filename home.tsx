import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Home() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter();

  useEffect(() => {
    carregarNome();
  }, []);

  async function carregarNome() {
    const valor = await AsyncStorage.getItem('nm_user');
    if (valor) setNome(valor);
  }

  function entrar() {
    // simulação de login
    const sucesso = senha.length > 0;

    if (sucesso) {
      Alert.alert('Sucesso', 'Login realizado!');
      router.replace('/home'); // ajuste se tiver outra rota
    } else {
      Alert.alert('Erro', 'Senha inválida');
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Bem-vindo {nome}</Text>

      <TextInput
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />

      <Button title="Entrar" onPress={entrar} />

      <TouchableOpacity onPress={() => router.push('/cadastro')}>
        <Text style={{ marginTop: 10 }}>
          Não tem conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}