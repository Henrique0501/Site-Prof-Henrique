var botaoEstou = document.querySelector('.botao');
var container = document.querySelector('.container-lampada');
var lamp = document.querySelector('.lampada-e-cabo');

botaoEstou.onmouseover = function(){
    lamp.src = "static/imagens/lampada-ligada.png";
    container.classList.remove('container-lampada');
    container.classList.add('lampada-embaixo');
};

botaoEstou.onmouseout = function(){
    lamp.src = "static/imagens/lampada-apagada.png";
    container.classList.remove('lampada-embaixo');
    container.classList.add('container-lampada');
};

////////////////////////////////// Disciplinas

var pointerGo = document.querySelector('.go');
var pointerBack = document.querySelector('.back');
var pointer = document.querySelectorAll('.button-pointer');
var carouselTD = document.querySelector('.carousel-3d');
var containerGifs = document.querySelector('.container-gifs');
var descricaoDisciplina = document.querySelector('.descricao-disciplina');
var fund = document.querySelector('#fund');
var med = document.querySelector('#med');
var sup = document.querySelector('#sup');
let countTD = 0;
let count = 4;

for (let ind = 0; ind < 2; ind++){
    pointer[ind].onclick = function(){

        if (ind == 1) {
            if ((((countTD)%(3) != 2) & ((countTD)%(3) != -1)) || (countTD == 0)) {
                count = count + 1;
            } else {
                count = count + 2;

            };
        } else {
            if (((countTD)%(3) != 0)) {
                count = count - 1;
            } else {
                count = count -2;

            };
        };

        var angle = (count)*90;
        containerGifs.style.transform = (`rotate(${angle}deg)`);

        if (ind == 1){
        countTD = countTD + 1;
        } else{
        countTD = countTD -1;
        }

        var angleTD = countTD*120 + 255;
        carouselTD.style.transform = (`rotateY(${angleTD}deg)`);

        console.log(countTD);
        console.log(countTD%3);

        if (countTD%3 == 0){
        descricaoDisciplina.innerHTML = "Aulas de matemática desde as operações básicas até os conteúdos mais avançados, incluindo as disciplinas de Cálculo do Ensino Superior.";
        fund.style.display = "list-item";
        med.style.display = "list-item";
        sup.style.display = "list-item";
        };
        if ((countTD%3 == 1) || (countTD%3 == -2)) {
        descricaoDisciplina.innerHTML = "Entenda física de uma maneira simples e completa!!!";
        fund.style.display = "none";
        med.style.display = "list-item";
        sup.style.display = "list-item";
        };
        if ((countTD%3 == 2) || (countTD%3 == -1)){
        descricaoDisciplina.innerHTML = "Marque uma aula e veja quão fácil a química é!!! ";
        fund.style.display = "none";
        med.style.display = "list-item";
        sup.style.display = "none";
        };
    };
};

///////////////////////////////////
var disciplinas = document.querySelectorAll('.disciplina')

for (let ind = 0; ind < 2; ind++){
    pointer[ind].onmouseover = function(){
        pointer[0].style.color = "var(--verde-neon)";
        pointer[1].style.color = "var(--verde-neon)";
        for (let i = 0; i < 3; i++){
            disciplinas[i].style.border = "solid 4px var(--verde-neon)";
            disciplinas[i].style.boxShadow = "0px 0px 10px var(--verde-neon)";
        };
    pointer[ind].onmouseout = function(){
        pointer[0].style.color = "var(--verde-moderno)";
        pointer[1].style.color = "var(--verde-moderno)";
        for (let i = 0; i < 3; i++){
            disciplinas[i].style.border = "solid 4px var(--verde-moderno)";
            disciplinas[i].style.boxShadow = "0px 0px 0px var(--verde-moderno)";
            };
        };
    };
};

///////////////////////////////////////////////// Selects dos preços
var selectAlunos = document.querySelector('#select-alunos');
var selectAulas = document.querySelector('#select-aulas');
var labelALunoHora = document.querySelector('#label-preco-por-aluno-hora')
var imagemAlunos = document.querySelector('#imagem-alunos')

var alunos = selectAlunos.options[selectAlunos.selectedIndex].value;
var aulas = selectAulas.options[selectAulas.selectedIndex].value;

var precoTotal = document.querySelector('.preco-total');
var precoPorAlunoHora = document.querySelector('.preco-por-aluno-hora');
var precoPorAluno = document.querySelector('.preco-por-aluno');
var line1 = document.querySelector('#line1');
var line2 = document.querySelector('#line2');
var line3 = document.querySelector('#line3');

const dicPrecos = {"Alunos": [1,2,3],
                1: [55,90,105],
                2: [96,160,198],
                4: [180, 280, 360],
                8: [344, 512, 600]
                }

selectAlunos.onchange = function(){
    alunos = selectAlunos.options[selectAlunos.selectedIndex].value;
    const total = dicPrecos[aulas][alunos - 1];
    precoTotal.innerHTML = `R$ ${total},00`;
    precoPorAlunoHora.innerHTML = `R$ ${total / (alunos*aulas)},00`;
    precoPorAluno.innerHTML = `R$ ${total/alunos},00`;
    if(alunos!=1){
        labelALunoHora.innerHTML = 'Valor da hora-aula:\n(para cada aluno)';
    } else {
        labelALunoHora.innerHTML = 'Valor da hora-aula:';
    };
    if(alunos==1){
        imagemAlunos.src = 'static/imagens/1aluno_1.png';
        line2.style.display = "none";
    };
    if(alunos==2){
        imagemAlunos.src = 'static/imagens/2alunos_1.png';
        line2.style.display = "table-row";
    };
    if(alunos==3){
        imagemAlunos.src = 'static/imagens/3alunos_1.png';
        line2.style.display = "table-row";
    };
    };

selectAulas.onchange = function(){
    aulas = selectAulas.options[selectAulas.selectedIndex].value;
    const total = dicPrecos[aulas][alunos - 1];
    precoTotal.innerHTML = `R$ ${total},00`;
    precoPorAlunoHora.innerHTML = `R$ ${total / (alunos*aulas)},00`;
    precoPorAluno.innerHTML = `R$ ${total/alunos},00`;
    if(alunos!=1){
        labelALunoHora.innerHTML = 'Valor da hora-aula:\n(para cada aluno)';
    } else {
        labelALunoHora.innerHTML = 'Valor da hora-aula:';
    };
    if(alunos==1){
        imagemAlunos.src = 'static/imagens/1aluno_1.png';
        line2.style.display = "none";
    };
    if(alunos==2){
        imagemAlunos.src = 'static/imagens/2alunos_1.png';
        line2.style.display = "table-row";
    };
    if(alunos==3){
        imagemAlunos.src = 'static/imagens/3alunos_1.png';
        line2.style.display = "table-row";
    };
    };