export default function Cadrastro() {
    const [nome, setNome] = useState('');
    const [seha, setSenha] = useState('');

async function carregar() {
    const valor = await asyncStorage.getItem('nm_user');
    if (valor) setNome(valor)
}

useEffect(() => {
    conectarBd();
    Carregar();
}, []);

function cadrastar() {
    if (!nome || !senha) {
        alert('Prencha todos os campos');
        return;
    }
    const sucesso = cadastarUsuario(nome, senha);
    if (sucesso) {
        AsyncStrorage.getItem('nm_user', nome);
        alert('senha cadrastrada com sucesso!');
        Router.replace('/home');
    } else {
        alert('erro ao cadrastar usuario');
    }
}
    return (
        <Text>
            cadrastar senha
        </Text>

        <TextInput
        placehoder="Nome"
        value={nome}
        editable={false}
        />

        <textInput
        placehoder="senha"
    )
}