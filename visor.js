
const container = document.getElementById('visor');

function createLineBreak() {
    container.innerHTML += '</br>';
}

function createButton(prType, prCampo,) {
    const btn = document.createElement('button');

    btn.appendChild(document.createTextNode(prCampo));    
    btn.setAttribute('onclick', `${prType}(${prCampo})`);

    container.appendChild(btn);
}


//-- CRIAR OS BOTOES    
createLineBreak()

createButton('numero', 7);
createButton('numero', 8);
createButton('numero', 9);
createButton('operador', "'%'");
createLineBreak();

createButton('numero', 4);
createButton('numero', 5);
createButton('numero', 6);
createButton('operador', "'x'");
createLineBreak();

createButton('numero', 1);
createButton('numero', 2);
createButton('numero', 3);
createButton('operador', "'+'");
createLineBreak();

createButton('limpar()', 'CE');
createButton('numero', 0);
createButton('operador', "'-'");
createButton('geraResultado()', "'='");
