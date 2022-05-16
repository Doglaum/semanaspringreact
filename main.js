const create = document.querySelector('#create')

function getApi() {
  return  axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=26002fc96d1675bd99be21f41d4c87bc&language=pt-BR&page=1'
    )
    .then(response => {
      return response.data.results
    })
    .catch(err => {
      console.error(err)
    })
}

getApi().then(res => {
  const image_path = 'https://image.tmdb.org/t/p/w500'
  const array = res

  array.forEach(element => {
    var card = document.createElement('div')
    card.classList.add('col-sm-6', 'col-lg-4', 'col-xl-3', 'mb-3')
    create.appendChild(card)

    var cardChild = document.createElement('div')
    cardChild.classList.add('dsmovie-card')

    var imagem = document.createElement('img')
    imagem.setAttribute('src', `${image_path}${element.backdrop_path}`)
    imagem.setAttribute('alt', element.title)
    cardChild.appendChild(imagem)

    var cardChild2 = document.createElement('div')
    cardChild2.classList.add('dsmovie-card-description')

    var titulo = document.createElement('h3')
    var conteudoTitulo = document.createTextNode(element.title)
    titulo.appendChild(conteudoTitulo)

    var avaliar = document.createElement('a')
    var conteudoAvaliar = document.createTextNode('Avaliar')
    avaliar.setAttribute('href', 'form.html')
    avaliar.classList.add('dsmovie-btn')
    avaliar.appendChild(conteudoAvaliar)

    cardChild2.appendChild(titulo)
    cardChild2.appendChild(avaliar)
    cardChild.appendChild(cardChild2)
    card.appendChild(cardChild)
  })
})
