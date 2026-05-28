// script.js

// BOTÃO "SAIBA MAIS"

const botao = document.getElementById('botaoProjeto');

botao.addEventListener('click', () => {

  document
  .getElementById('contexto')
  .scrollIntoView({
    behavior:'smooth'
  });

});


// MENU MUDA DE COR AO ROLAR

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    header.classList.add('header-scroll');

  } else {

    header.classList.remove('header-scroll');

  }

});


// ANIMAÇÃO DAS SEÇÕES

const elementos = document.querySelectorAll('.mostrar');

function animarScroll(){

  const topoPagina = window.innerHeight * 0.85;

  elementos.forEach((elemento) => {

    const posicao = elemento.getBoundingClientRect().top;

    if(posicao < topoPagina){

      elemento.classList.add('aparecer');

    }

  });

}

window.addEventListener('scroll', animarScroll);

animarScroll();