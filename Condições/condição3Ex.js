var dataAtual = new Date();
var hora = dataAtual.getHours();
console.log(`Agora são exatamente ${hora} horas.`);
if (hora >= 6 && hora < 12) {
  console.log("Bom Dia");
} else if (hora > 11 && hora < 19) {
  console.log("Boa Tarde");
} else if (hora < 24) {
  console.log("Boa Noite");
}
