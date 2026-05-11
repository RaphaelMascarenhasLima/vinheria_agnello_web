alert("Bem-vindo à Vinharia Agnello!");

function validarEntrada(texto) {
    while (texto === null || texto.trim() === "") {
        texto = prompt("Entrada inválida. Digite novamente:");
    }
    return texto;
}

function verificarEstoqueBaixo(qtd) {
    if (qtd < 5) {
        return "Estoque Baixo";
    } else {
        return "Estoque OK";
    }
}

function classificarVinho(anoSafra) {
    let anoAtual = 2026;
    let idadeVinho = anoAtual - anoSafra;

    if (idadeVinho <= 5) {
        return "Vinho Jovem";
    } else if (idadeVinho <= 15) {
        return "Vinho Amadurecido";
    } else {
        return "Vinho Antigo";
    }
}

function mostrarDados(nome, tipo, safra, quantidade, classificacao, estoque) {

    console.log("===== DADOS DO VINHO =====");
    console.log("Nome:", nome);
    console.log("Tipo:", tipo);
    console.log("Safra:", safra);
    console.log("Quantidade:", quantidade);
    console.log("Classificação:", classificacao);
    console.log("Status Estoque:", estoque);

    alert(
        "Vinho cadastrado!\n" +
        "Nome: " + nome +
        "\nTipo: " + tipo +
        "\nSafra: " + safra +
        "\nQuantidade: " + quantidade +
        "\nClassificação: " + classificacao +
        "\nEstoque: " + estoque
    );
}


let continuar = "sim";

let totalCadastros = 0;
let totalEstoqueBaixo = 0;

let vinhoMaisAntigo = "";
let safraMaisAntiga = 9999;

while (continuar.toLowerCase() === "sim") {

    let nomeVinho = validarEntrada(
        prompt("Digite o nome do vinho:")
    );

    let tipoVinho = validarEntrada(
        prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):")
    );

    let safraVinho = parseInt(
        validarEntrada(
            prompt("Digite o ano da safra:")
        )
    );

    let quantidadeVinho = parseInt(
        validarEntrada(
            prompt("Digite a quantidade em estoque:")
        )
    );

    let classificacao = classificarVinho(safraVinho);

    let statusEstoque = verificarEstoqueBaixo(quantidadeVinho);

    totalCadastros++;

    if (quantidadeVinho < 5) {
        totalEstoqueBaixo++;
    }

    if (safraVinho < safraMaisAntiga) {
        safraMaisAntiga = safraVinho;
        vinhoMaisAntigo = nomeVinho;
    }

    mostrarDados(
        nomeVinho,
        tipoVinho,
        safraVinho,
        quantidadeVinho,
        classificacao,
        statusEstoque
    );

    continuar = prompt("Deseja cadastrar outro vinho? (sim/não)");
alert(
    "Resumo Final:\n" +
    "Total de cadastros: " + totalCadastros +
    "\nVinhos com estoque baixo: " + totalEstoqueBaixo +
    "\nVinho com safra mais antiga: " + vinhoMaisAntigo
);

console.log("===== RESUMO FINAL =====");
console.log("Total de cadastros:", totalCadastros);
console.log("Vinhos com estoque baixo:", totalEstoqueBaixo);
console.log("Vinho mais antigo:", vinhoMaisAntigo);}
