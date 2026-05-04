import { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { 
  exibirProdutos, adicionarProduto, editarProduto
} from '../services/produtoService';

export default function Produto() {
  const [produtos, setProdutos] = useState<any>([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [editandoId, setEditandoId] = useState<number | null>(null);

  useEffect(() => {
    
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    const lista = exibirProdutos();
    setProdutos(await lista);
  }

 async function salvar() {
   if (editandoId !== null) {
      await editarProduto(editandoId, nome, parseFloat(preco));
     setEditandoId(null);
    } else {
     await adicionarProduto(nome, parseFloat(preco));
     }

     setNome('');
    setPreco('');
     carregarProdutos();
  }

//  function deletar(id: number) {
//     excluirProduto(id);
//     carregarProdutos();
//   }

   async function editar(item: any) {
     setNome(item.nome);
    setPreco(String(item.preco));
    setEditandoId(item.id);
  }

  return (
    <View style={styles.container}>
      
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity style={styles.botaoAdicionar} onPress={salvar} >
        <Text style={styles.textoBotaoAdicionar}>
          {editandoId !== null ? 'Atualizar' : 'Adicionar'}
        </Text>
      </TouchableOpacity>

      <View style={styles.cabecalho}>
        <Text style={styles.colunaProduto}>Produto</Text>
        <Text style={styles.colunaAcao}>Editar</Text>
        <Text style={styles.colunaAcao}>Excluir</Text>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.linha}>
            
            <Text style={styles.colunaProduto}>
              {item.nome} - R$ {item.preco}
            </Text>
             
            <View>
             <Text onPress={() => editar(item)}>
                Editar
              </Text>
              </View>
              
            <TouchableOpacity
              style={styles.botaoEditar}
              
             
            >
              <Text style={styles.textoEditar}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoExcluir}
              
            >
              <Text style={styles.textoExcluir}>Excluir</Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
  },
botaoAdicionar: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },

  textoBotaoAdicionar: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  cabecalho: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  linha: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },

  colunaProduto: {
    flex: 1,
  },

  colunaAcao: {
    width: 70,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  botaoEditar: {
    width: 70,
    alignItems: 'center',
  },

  botaoExcluir: {
    width: 70,
    alignItems: 'center',
  },

  textoEditar: {
    color: 'blue',
    fontWeight: 'bold',
  },

  textoExcluir: {
    color: 'red',
    fontWeight: 'bold',
  },
});