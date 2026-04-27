<Text style={StyleSheet.clunasProduto}>
    {item.nome} - r$ {Item.preco}
</Text>

<touchableOpacity
onPress=(() =>editar(item))
/>touchableOpacity

<textInput
placehoder="nome"
value={nome}
onChageText={setNome}
/>
<textInput
placehoder="preco"
value={preco}
onChangeText={setPreco}
keyboardType="numeric"
/>
<touchableOpacity onPress={salvar}>
    <Text>
        {editandoId !== null ? 'atualizar' :
        'Adicionar'}
        adiconar
    </Text>
</touchableOpacity>

const [nome, setNome] = useState('');
const [preco, setPreco] = useState('');

const [editandoId, setEditandoId] = useState<number | null>(null);
useStata<number | null>(null);

useEffect(() => {
    conectarBD();
    carregarProdutos
}
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
