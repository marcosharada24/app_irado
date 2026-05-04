import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../services/supabase';

export default function Index() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  useEffect(() => {
    // pode deixar vazio mesmo
  }, []);

  async function entrar() {
    if (!nome || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: nome,
        password: senha,
      });

      if (error) {
        Alert.alert('Erro', error.message);
        return;
      }

      if (data.user) {
        Alert.alert('Sucesso', 'Login realizado!');
        router.replace('/produto');
      }
    } catch (e) {
      console.log(e);
      Alert.alert('Erro', 'Falha ao fazer login');
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Login
      </Text>

      <TextInput
        placeholder="Email"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TouchableOpacity
        onPress={entrar}
        style={{
          backgroundColor: '#007bff',
          padding: 10,
          marginTop: 10,
          borderRadius: 5
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/cadastro')}
        style={{ marginTop: 15 }}
      >
        <Text style={{ textAlign: 'center' }}>
          Não tem conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}