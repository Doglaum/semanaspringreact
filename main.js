const create = document.querySelector('#create')

function getApi() {
  return Promise.all([
    axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=26002fc96d1675bd99be21f41d4c87bc&language=pt-BR&page=1'
    ),
    axios.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=26002fc96d1675bd99be21f41d4c87bc&language=pt-BR&page=1'
    ),
    axios.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=26002fc96d1675bd99be21f41d4c87bc&language=pt-BR&page=1'
    )
  ])
    .then(response => {
      let arr = []
      arr = [
        ...response[0].data.results,
        ...response[1].data.results,
        ...response[2].data.results
      ]
      console.log(arr)
      return arr
    })
    .catch(err => {
      console.error(err)
    })
}

getApi().then(res => {
  const image_path = 'https://image.tmdb.org/t/p/w500'
  const array = res

  array.forEach(element => {
    let card = document.createElement('div')
    card.classList.add('col-sm-6', 'col-lg-4', 'col-xl-3', 'mb-3')
    create.appendChild(card)

    let cardChild = document.createElement('div')
    cardChild.classList.add('dsmovie-card')

    let imagem = document.createElement('img')
    imagem.setAttribute('src', `${image_path}${element.backdrop_path}`)
    imagem.setAttribute('alt', element.title)
    cardChild.appendChild(imagem)

    let cardChild2 = document.createElement('div')
    cardChild2.classList.add('dsmovie-card-description')

    let titulo = document.createElement('h3')
    let conteudoTitulo = document.createTextNode(element.title)
    titulo.appendChild(conteudoTitulo)

    cardChild2.appendChild(titulo)

    let cardChild3 = document.createElement('div')
    cardChild3.classList.add('dsmovie-card-description-bottom')

    let cardChild4 = document.createElement('div')
    cardChild4.classList.add('stars')

    let avaliacao = document.createElement('h4')
    let conteudoAvaliacao = document.createTextNode(element.vote_average)
    cardChild4.appendChild(conteudoAvaliacao)

    let imagemEstrela = document.createElement('img')
    imagemEstrela.setAttribute('src', 'img/star-full.svg')
    cardChild4.appendChild(imagemEstrela)

    let totalAvaliacao = document.createElement('p')
    let conteudoTotalAvaliacao = document.createTextNode(
      `${element.vote_count} avaliações`
    )
    totalAvaliacao.appendChild(conteudoTotalAvaliacao)

    cardChild3.appendChild(cardChild4)
    cardChild3.appendChild(totalAvaliacao)

    let descricao = document.createElement('a')
    let conteudoDescricao = document.createTextNode('Descrição')
    descricao.setAttribute('href', 'description.html')
    descricao.onclick = () => {
      let descricao = JSON.stringify(element.overview)
      let titulo = JSON.stringify(element.title)
      let poster = JSON.stringify(`${image_path}${element.backdrop_path}`)
      sessionStorage.setItem('descricao', descricao)
      sessionStorage.setItem('titulo', titulo)
      sessionStorage.setItem('poster', poster)
    }
    descricao.classList.add('dsmovie-btn')
    descricao.appendChild(conteudoDescricao)

    cardChild3.appendChild(descricao)
    cardChild2.appendChild(cardChild3)
    cardChild.appendChild(cardChild2)
    card.appendChild(cardChild)
  })
})
