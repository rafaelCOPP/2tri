const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual sua opnião sobre música clássica ?",
            alternativas: [

            texto: "Chato",
            afirmação: "afirmação"  
                
            texto: "Legal",
            afirmação: "afirmação"      
        ]
    },
    {
        enunciado: "Você pratica aulas de algum instrumento ?",
        alternativas: [
            "Sim, bastante",
            "Não muitp",
            "Não",
        ]
    },
    {
        enunciado: "Você acha importante que haja mais aulas de músicas para as pessoas ?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
    {
        enunciado: "Se você conseguisse tocar um instrumento, qual família seria ?",
        alternativas: [
            "Cordas",
            "Madeira",
            "Metais",
            "Percursão",
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
           "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if(atual >= perguntas.lenght){
        mostraResultado();
        return;
    }
    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


let atual = 0;
let perguntaAtual;


function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
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


function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "";
}

mostraPergunta();
