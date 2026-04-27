export default function Home() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
}

function entrar() {
    const suceeso = loginUsuario(nome, senha);

    if (sucesso) {
        router.
    }
}

<Text>bem-vindo {nome}</Text>

<TextInput
placehoder="digite sua senha"
value={senha}
onChangeText={setSenha}
secureTextEntry
/>
<touchableOpacity onPress=[() => Router.push('/cadrastro')]>
<Text>
nao tem conta? cadratre-se
</Text>
</TouchableOpacity>

</view>