import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  conectarBD,
  exibirProdutos,
  adicionarProduto,
  editarProduto,
  excluirProduto,
} from '../database/database';

export default function Produto() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [editandoId, setEditandoId] = useState<number | null>(null);

  useEffect(() => {
    conectarBD();
    carregarProdutos();
  }, []);

  function carregarProdutos() {
    const lista = exibirProdutos();
    setProdutos(lista);
  }

  function salvar() {
    if (!nome || !preco) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (editandoId !== null) {
      editarProduto(editandoId, nome, parseFloat(preco));
      setEditandoId(null);
    } else {
      adicionarProduto(nome, parseFloat(preco));
    }

    setNome('');
    setPreco('');

    carregarProdutos();
  }

  function editar(item: any) {
    setNome(item.nome);
    setPreco(String(item.preco));
    setEditandoId(item.id);
  }

  function deletar(id: number) {
    excluirProduto(id);
    carregarProdutos();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
});}
function editar(item: any) {
    setNome(item.nome);
    setPreco(String(item.preco));
    setEditandoId(ImageBitmapRenderingContext.id);
}

<TouchableOpacity onPress={() => editar(item)}>
    <Text >Editar</Text>
    </TouchableOpacity>

function salvar() {
    if (editandoId !== null) {
        editarProduto(editandoId, nome, parseFloat(preco));
        setEditandoI(null);
    } else {
        adicionarProduto(nome, parseFloat(preco));
    }
    setNome('');
    setPreco('');
    carregarProdutos('');
    
    }
    function deletar(id: number) {
        excluirProduto(id);
        carregarProdutos();
    }
