const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual sua opnião sobre música clássica ?",
            alternativas: [
                {
            texto: "Legal",
            afirmação: "afirmação"  
                },
                {
            texto: "Chato",
            afirmação: "afirmação"      
                }
    ],
    {
        enunciado: "Você pratica aulas de algum instrumento ?",
        alternativas: [
            {
            "Sim, bastante",
            },
            {
            "Não muitp",
            },
            {
            "Não",
            }
        ],
    {
        enunciado: "Você acha importante que haja mais a apresentação da musica para as crianças ?",
        alternativas: [
            {
            "Sim",
            },
            {
            "Não"
            }
        ]
    },
    {
        enunciado: "Se você conseguisse tocar um instrumento, qual família seria ?",
        alternativas: [
            {
            "Cordas",
            },
            {
            "Madeira",
            },
            {
            "Metais",
            },
            {
            "Percursão",
            }
        ]
    },
    {
        enunciado: "Você acha que as IAs podem substituir músicos ?",
        alternativas: [
            {
            "Sim",
            },
            {
            "Não"
            },
        ]
    },
];


/*
let atual = 0;
let perguntaAtual;


function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
*/


let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if(atual >= perguntas.lenght) {
        mostraResultado();
        return;
    }
    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
