 function criaCartao(categoria, pergunta, resposta) {
    let container= document.getElementById('container')
    let cartao = document.creatrElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
          <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
          <p>${resposta}</p>
    </div>
    </div>
    `

    let repostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivelcartao
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)