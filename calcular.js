const DIVISAO = '/';
const SOMA = '+';
const SUBTRACAO = '-';
const MULTIPLICACAO = '*';
const NUMERO = 'numero';
const OPERADOR = 'operador';

var conta = '';
var contadorOperacoes = 0;
var anterior = null;

function geraResultado() {
    if (anterior !== OPERADOR) {
        if (conta == '') {
            eval('result = ' + 0 + ';');
        }
        else {
            eval('result = ' + conta + ';');
        }
        conta = String(result);
        contadorOperacoes = 0;
        atualizaVisor(conta);
    }
}

function atualizaVisor(valor) {
    let div = document.getElementById('resultado');
    div.innerHTML = valor;
}
 
function numero(numero) {
    if (contadorOperacoes < 2) {
        conta += numero;
    }
    else {
        geraResultado();
    }
    anterior = NUMERO;
    atualizaVisor(conta);
}

function operador(operador) {

    if (anterior != OPERADOR) {
        contadorOperacoes++;

        if (contadorOperacoes < 2) {
            conta += operador;
            anterior = OPERADOR;
        }
        else {
            anterior = null;
            contadorOperacoes = 0;
            geraResultado();
        }

    }

    atualizaVisor(conta);
}

function isOperador(caracter) {

    switch (caracter) {
        case SOMA:
            return true;
            break;
        case SUBTRACAO:
            return true;
            break;
        case MULTIPLICACAO:
            return true;
            break;
        case DIVISAO:
            return true;
            break;
    
        default:
            return false;
            break;
    }

}

function verificaOperador() {
    if (isOperador(getUltimoCaracter(conta))) {
        anterior = OPERADOR;
    }
    else {
        anterior = NUMERO;
    }
}

function getUltimoCaracter() {
    return conta.substring(conta.length-1, conta.length)
}

function limpar() {
    verificaOperador();
    conta = '';
    atualizaVisor('');
}
