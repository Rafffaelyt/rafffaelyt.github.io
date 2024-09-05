const textoElement = document.getElementById('texto');
const inputElement = document.getElementById('input');

let estado = {
    local: 'Underground',
    itens: [],
    relacionamentos: {}
};

let cenas = [
    {
        texto: "Você acorda no Underground de Undertale. Não se lembra de como chegou aqui. Você decidi ir para um local a sua esquerda ao chegar no final vc encontra Flowey. O que você faz? Opções: Tentar fazer amizade, Tentar fugir",
        opcoes: [
            { texto: "Tentar fazer amizade", proximaCena: 1 },
            { texto: "Tentar fugir", proximaCena: 1 }
        ]
    },
    
    {
        texto: "Você quase morre, mas Toriel te salva. Oque tu faz? Opções: Agradecer a Toriel, Apenas ignorar",
        opcoes: [
            { texto: "Agradecer a Toriel", proximaCena: 2 },
            { texto: "Apenas ignorar", proximaCena: 3 }
        ]
    },
    {
        texto: "Toriel agradece pelo seu ato de gentileza, vocês vão até as Ruínas. O que você faz? Opções: Ficar com ela ou ir embora",
        opcoes: [
            { texto: "Ficar com ela", proximaCena: 4 },
            { texto: "Ir embora", proximaCena: 6 }
        ]
    },
    {
        texto: "Toriel fica bem triste com você. O que você faz? Opções: Ficar com ela ou ir embora",
        opcoes: [
            { texto: "Ficar com ela", proximaCena: 3 },
            { texto: "Ir embora", proximaCena: 5 }
        ]
    },
    {
        texto: "Toriel fica bem feliz com você",
    },
    {
        texto: "Toriel luta com você, você ganha. O que você faz? Opções: Mato ela, Deixo ela e vou para a proxima área",
        opcoes: [
            { texto: "Mato ela", proximaCena: 6 },
            { texto: "Deixo ela e vou para a proxima área", proximaCena: 6 }
        ]
    },
    {
        texto: "Você encontra Sans. O que você faz? Opções: Tento matar ele, Deixo ele",
        opcoes: [
            { texto: "Tento matar ele", proximaCena: 7 },
            { texto: "Deixo ele", proximaCena: 8 }
        ]
    },
    {
        texto: "Você morre seu nível era muito abaixo.",
    },
    {
        texto: "Acabou. Muito obrigado por ficar até aqui.",
    }
];

let indiceCena = 0;

function processarInput() {
    const input = inputElement.value.toLowerCase();
    const cenaAtual = cenas[indiceCena];
    const opcaoSelecionada = cenaAtual.opcoes.find(opcao => opcao.texto.toLowerCase() === input);

    if (opcaoSelecionada) {
        indiceCena = opcaoSelecionada.proximaCena;
        atualizarTela();
    } else {
        textoElement.textContent = "Comando inválido.";
    }

    inputElement.value = "";
}

function atualizarTela() {
    const cenaAtual = cenas[indiceCena];
    textoElement.textContent = cenaAtual.texto;
    // Atualizar outras partes da interface, como opções de diálogo

    // Verificar condições para eventos aleatórios, mudanças de estado, etc.
}

atualizarTela();