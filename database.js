import * as SQLite from 'expo-sqlite';

const banco = SQLite.openDatabaseSync('banco.db');

export function conectarBD() {
  try {
    banco.execSync(`
      CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        preco REAL
      );
    `);

    const resposta = banco.getFirstSync(
      'SELECT COUNT(*) as total FROM produtos'
    );

    if (resposta.total === 0) {
      banco.execSync(`
        INSERT INTO produtos (nome, preco) VALUES
        ('cavalo', 150.00),
        ('boi', 160.00),
        ('homem', 200.00);
      `);
    }
  } catch (error) {
    console.log('Erro ao conectar com banco:', error);
  }
}


export  function exibirProdutos() {
    try {
        return banco.getALLSync('SELECT * FROM produtos');
    } catch (error) {
        console.log('erro ao buscar produtos:', error);
        return
    }

    }
