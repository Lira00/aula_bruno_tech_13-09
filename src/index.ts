console.log("oi");
// calcular media
function calcularMediaEStatus(nota1: number, nota2: number) {
  const media = (nota1 + nota2) / 2;
  const aprovado = media >= 6;

  return {
    media,
    aprovado,
  };
}

const resultado = calcularMediaEStatus(9, 3);
console.log(`Média: ${resultado.media}`);
console.log(`Aprovado: ${resultado.aprovado}`);

// media ponderada

interface NotaPeso {
  nota: number;
  peso: number;
}

function calcularMediaPonderada(listaNotasPesos: NotaPeso[]): number {
  let totalNotas = 0;
  let totalPesos = 0;

  for (const item of listaNotasPesos) {
    const nota = item.nota;
    const peso = item.peso;
    totalNotas += nota * peso;
    totalPesos += peso;
  }

  if (totalPesos === 0) {
    return 0; // Evitar divisão por zero
  }

  const mediaPonderada = totalNotas / totalPesos;
  return mediaPonderada;
}

// Exemplo de uso:
const listaNotasPesos: NotaPeso[] = [
  { nota: 8.0, peso: 2 },
  { nota: 7.5, peso: 3 },
  { nota: 9.0, peso: 1 },
];

const media = calcularMediaPonderada(listaNotasPesos);
console.log(`A média ponderada das notas é: ${media}`);

//carteira

class Carteira {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public registrarEntrada(valor: number): void {
    this.saldo += valor;
  }

  public registrarSaida(valor: number): void {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para realizar a saída.");
    } else {
      this.saldo -= valor;
    }
  }
}

// Exemplo de uso:
const minhaCarteira = new Carteira(1000); // Saldo inicial de 1000

minhaCarteira.registrarEntrada(500);
minhaCarteira.registrarSaida(200);
minhaCarteira.registrarSaida(800); // Isso mostrará "Saldo insuficiente"
console.log(`Saldo atual: R$${minhaCarteira.getSaldo()}`);

//Lista de produto

type Produto = {
  id: number;
  nome: string;
  preco: number;
};

class GerenciadorProdutos {
  private produtos: Produto[] = [];
  private proximoId: number = 1;

  public cadastrarProduto(nome: string, preco: number): void {
    const novoProduto: Produto = {
      id: this.proximoId,
      nome,
      preco,
    };
    this.produto.push(novoProduto);
    this.proximoId++;
  }

  public listarProdutos(): Produto[] {
    return this.produtos;
  }

  public excluirProduto(id: number): void {
    const indice = this.produtos.findIndex((produto) => produto.id === id);
    if (indice !== -1) {
      this.produtos.splice(indice, 1);
    }
  }
}

// Exemplo de uso:
const gerenciador = new GerenciadorProdutos();

gerenciador.cadastrarProduto("Produto 1", 10.99);
gerenciador.cadastrarProduto("Produto 2", 20.49);

console.log("Lista de Produtos:");
console.log(gerenciador.listarProdutos());

gerenciador.excluirProduto(1); // Excluir o produto com ID 1

console.log("Lista de Produtos após exclusão:");
console.log(gerenciador.listarProdutos());
