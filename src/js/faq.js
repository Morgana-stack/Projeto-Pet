/*FAQ ACCORDION*/
const faqPerguntas = document.querySelectorAll('.faq-pergunta');
faqPerguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {

        const faqItem = pergunta.parentElement;
        const isAtivo = faqItem.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        if (!isAtivo) {
            faqItem.classList.add('active');
        }
    });
});
/*CARROSSEL DOS DEPOIMENTOS*/

const wrapper = document.querySelector('.depoimento-wrapper');
const cards = document.querySelectorAll('.depoimento-card');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

if(wrapper && cards.length && btnPrev && btnNext){ 

let indexAtual = 0;
const cardWidth = cards[0].offsetWidth + 24;

wrapper.innerHTML += wrapper.innerHTML;
const totalCards = wrapper.children.length;

function atualizarCarrossel(semAnimacao = false) {
    if (semAnimacao) {
        wrapper.style.transition = 'none';
    } else {
        wrapper.style.transition = 'transform 0.4s ease';
    }
    wrapper.style.transform = `translateX(-${indexAtual * cardWidth}px)`;
}

btnNext.addEventListener('click', () => {
    indexAtual++;
    atualizarCarrossel();

    if (indexAtual >= totalCards / 2) {
        setTimeout(() => {
            indexAtual = 0;
            atualizarCarrossel(true);
        }, 400);
    }
});

btnPrev.addEventListener('click', () => {
    indexAtual--;
    if (indexAtual < 0) {
        indexAtual = totalCards / 2 - 1;
        atualizarCarrossel(true);
    } else {
        atualizarCarrossel();
    }

});

}
/*CONFIRMAÇÃO DE AGENDAMENTO*/

let btn = document.getElementById("btn-agendar"); 
   
    if(btn){
       
        btn.addEventListener("click", function(event){
            event.preventDefault();
             
    alert("✅ Agendamento confirmado com sucesso!");
});

}

