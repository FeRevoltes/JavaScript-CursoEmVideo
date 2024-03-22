function carregar() {
  var msg = document.querySelector("#msgHora");
  var img = document.querySelector(".dia")

  var dataAtual = new Date()
  var hora = dataAtual.getHours()

  msg.textContent = `Agora são ${hora} horas.`

  if (hora >=6 && hora <12){
    document.body.style.background = '#6B892A'
    img.src = './img/manha.jpg'
  } else if (hora >=12 && hora < 18){
    document.body.style.background = '#F6B363'
    img.src = './img/tarde.jpg'
  } else {
    document.body.style.background = '#A081BB'
    img.src = './img/noite.jpg'
  }
}
