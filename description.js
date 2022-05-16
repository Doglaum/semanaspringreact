const filme = {
  titulo: JSON.parse(sessionStorage.getItem('titulo')),
  descricao: JSON.parse(sessionStorage.getItem('descricao')),
  poster: JSON.parse(sessionStorage.getItem('poster'))
}

const titulo = document.querySelector('#titulo')
const descricao = document.querySelector('#descricao')
const img = document.querySelector('#img')
titulo.innerHTML = filme.titulo
descricao.innerHTML = filme.descricao
img.src = filme.poster
img.alt = filme.titulo
