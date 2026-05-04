import { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity, Alert } from 'react-native';

import { useRouter } from 'expo-router';


export default function Index() {
const [nome, setNome] = useState('');
const [senha, setSenha] = useState('');
const router = useRouter();
// 🔹 Inicializa banco ao abrir app
useEffect(() => {
try {
initDB();

} catch (e) {
console.log('Erro ao iniciar DB:', e);

}

}, []);



function entrar() {

if (!nome || !senha) {

Alert.alert('Erro', 'Preencha todos os campos');

return;

}


const ok = login(nome, senha);



if (ok) {

router.push('/produto');

} else {
Alert.alert('Erro', 'Usuário ou senha inválidos');

}

}



return (

<View style={{ padding: 20 }}>

<Text style={{ fontSize: 22, marginBottom: 20 }}>

Login

</Text>



<Input
placeholder="Nome"
value={nome}
onChangeText={setNome}
/>


<Input

placeholder="Senha"

value={senha}

onChangeText={setSenha}

secureTextEntry

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