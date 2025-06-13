/**
 * Cria e insere um flashcard no container principal.
 * O cartão mostra a categoria e a pergunta, e revela a resposta ao ser clicado.
 * A resposta é alternada entre visível e oculta sem depender de manipulação direta de estilos inline.
 * 
 * @param {string} categoria - O título/categoria do cartão
 * @param {string} pergunta - O texto da pergunta
 * @param {string} resposta - O texto da resposta
 */
function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.classList.add('cartao');

    // Estrutura do cartão (usa data attributes para estado)
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3 class="cartao__categoria">${categoria}</h3>
            <div class="cartao__pergunta">${pergunta}</div>
            <div class="cartao__resposta" hidden>${resposta}</div>
        </div>
    `;

    // Alterna a visibilidade da resposta ao clicar
    cartao.addEventListener('click', function () {
        const respostaElem = cartao.querySelector('.cartao__resposta');
        const estaVisivel = !respostaElem.hasAttribute('hidden');
        respostaElem.toggleAttribute('hidden');
        cartao.classList.toggle('cartao--ativo', !estaVisivel);
    });

    container.appendChild(cartao);
}
