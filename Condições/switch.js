var agora = new Date();
var diaDaSemanda = agora.getDay();
var nomeDoDia;
/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
switch (diaDaSemanda) {
  case 0:
    nomeDoDia = "Domingo";
    break;
  case 1:
    nomeDoDia = "Segunda";
    break;
  case 2:
    nomeDoDia = "Terça";
    break;
  case 3:
    nomeDoDia = "Quarta";
    break;
  case 4:
    nomeDoDia = "Quinta";
    break;
  case 5:
    nomeDoDia = "Sexta";
    break;
  case 6:
    nomeDoDia = "Sábado";
    break;
}
console.log(`Hoje é ${nomeDoDia}`);
