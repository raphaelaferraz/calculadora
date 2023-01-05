const numeros = document.querySelectorAll(".input-numero");
const operacoes = document.querySelectorAll(".input-operacao");
const tela = document.querySelector("#tela-calculadora");
const botaoIgual = document.querySelector("#igual");
const AC = document.querySelector(".input-limpar");
let operacao = '';
const botaoAzul = document.getElementById("botao-azul")
const botaoRosa = document.querySelector(".botao-rosa");
const corpo = document.getElementById("corpo");
const calculadora = document.getElementById("calculadora");
const botoesOperacao = document.querySelectorAll(".input-operacao");
const botoesNumeros = document.querySelectorAll(".input-numero");

botaoAzul.addEventListener("click", () => {
    corpo.style.background = "radial-gradient(circle, rgb(3, 1, 92) 0%, rgba(0,0,0,1) 100%)";
    calculadora.style.background = "#174f5c55";
    calculadora.style.boxShadow = "1px 1px 1px rgb(122 239 251 / 32%)";
    tela.style.background = "rgb(52 73 148)";
    AC.style.background = "#010316";
    AC.style.border = "1px solid #00ffff";
    AC.style.boxShadow = "none";
    AC.style.color = "#56f1f9";
    botoesOperacao.forEach((botaoOperacao) => {
        botaoOperacao.style.background = "#010316";
        botaoOperacao.style.border = "1px solid #00ffff";
        botaoOperacao.style.boxShadow = "none";
        botaoOperacao.style.color = "#56f1f9";
    });
    botoesNumeros.forEach((botaoNumero) => {
        botaoNumero.style.background = "#638c99";
        botaoNumero.style.border = "1px solid #00ffff";
        botaoNumero.style.boxShadow = "none";
        botaoNumero.style.color = "#56f1f9"
    });
});

botaoRosa.addEventListener("click", () => {
    corpo.style.background = "radial-gradient(circle, rgba(166,0,102,1) 0%, rgba(0,0,0,1) 100%)";
    calculadora.style.background = "#5c172655";
    calculadora.style.boxShadow = "1px 1px 1px rgba(251, 122, 201, 0.27)";
    tela.style.background = " rgba(148, 52, 111, 15)";
    AC.style.background = "#3C0024";
    AC.style.border = "1px solid #FF009C";
    AC.style.boxShadow = "0px 4px 4px rgba(255, 0, 156, 0.27)";
    AC.style.color = "#E3A7D2";
    botoesOperacao.forEach((botaoOperacao) => {
        botaoOperacao.style.background = "#3C0024";
        botaoOperacao.style.border = "1px solid #FF009C";
        botaoOperacao.style.boxShadow = "0px 4px 4px rgba(255, 0, 156, 0.27)";
        botaoOperacao.style.color = "#E3A7D2";
    });
    botoesNumeros.forEach((botaoNumero) => {
        botaoNumero.style.background = "#C073A2";
        botaoNumero.style.border = "1px solid  #FF009C";
        botaoNumero.style.boxShadow = "0px 4px 4px rgba(255, 0, 156, 0.27)";
        botaoNumero.style.color = "#39052B";
    });
})

function mostraNumeros() {
    numeros.forEach((numero) => {
        pressionarTecla(numero)
        numero.addEventListener("click", () => {
            operacao += numero.value;
            tela.innerHTML = operacao;
        })  
    })

    operacoes.forEach((operador) => {
        operador.addEventListener("click", () => {
            tela.innerHTML = operador.value;
            operacao += operador.value;
            if(operador.value === '%') {
                porcentagem();
            }
        })
    })
}

mostraNumeros();

function porcentagem() {
    let numero = parseInt(operacao.split("%")[0]);
    let resultado = numero / 100;
    tela.innerHTML = resultado;
    operacao = resultado.toString();
}

function botaoLimpar(e) {
    AC.addEventListener("click", () => {
        tela.innerHTML = 0;
        operacao = '';
    });
}

botaoLimpar();

function limpar() {
    operacao = '';
}

function contas() {
    if(operacao.includes("x")) {
        let numeros = operacao.split("x");
        let numero1 = parseFloat(numeros[0]);
        let numero2 = parseFloat(numeros[1]);
        let resultadoOperacao = numero1 * numero2;
        tela.innerHTML = resultadoOperacao;
        limpar();
    } else if (operacao.includes("+")) {
        operacao.split("+");
        let numeros = operacao.split("+");
        let numero1 = parseFloat(numeros[0]);
        let numero2 = parseFloat(numeros[1]);
        tela.innerHTML = numero1 + numero2;
        limpar();
    } else if (operacao.includes("-")) {
        operacao.split("-");
        let numeros = operacao.split("-");
        let numero1 = parseFloat(numeros[0]);
        let numero2 = parseFloat(numeros[1]);
        tela.innerHTML = numero1 - numero2;
        limpar();
    } else if (operacao.includes("/")) {
        operacao.split("/");
        let numeros = operacao.split("/");
        let numero1 = parseFloat(numeros[0]);
        let numero2 = parseFloat(numeros[1]);
        tela.innerHTML = numero1 / numero2;
        limpar();
    } 
}


function igual() {
    botaoIgual.addEventListener("click", contas);
}

igual();

document.addEventListener("keypress", function(e) {
    if(e.which == 13) {
        contas();
    } else if (e.which == 32) {
        tela.innerHTML = 0;
        operacao = '';
    }
}, false);

function pressionarTecla() {
    function teclaPressionada(evt) {
        evt = evt || window.event;
        var key = evt.keyCode || evt.which;
        console.log(String.fromCharCode(key))
        return String.fromCharCode(key);
    }
    
    document.onkeypress = function(evt) {
        var str = teclaPressionada(evt);
        operacao += str;
        tela.innerHTML += str;
    }
}
