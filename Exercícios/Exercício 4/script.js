function count() {
  var numStart = parseInt(document.getElementById("numStart").value);
  var numEnd = parseInt(document.getElementById("numEnd").value);
  var numStep = parseInt(document.getElementById("numStep").value);
  var result = document.getElementById("result");

  if (isNaN(numStart) || isNaN(numEnd) || isNaN(numStep) || numStep === 0) {
    alert("Por favor, insira números válidos");
    return; //Finaliza a execução da função
  }

  result.innerHTML = ``;
  if (numStart < numEnd && numStep > 0) {
    for (var i = numStart; i <= numEnd; i += numStep) {
      result.innerHTML += `${i} &#128073; `;
    }
    result.innerHTML += `&#10004;&#65039;`;
  } else if (numStart > numEnd && numStep < 0) {
    for (var i = numStart; i >= numEnd; i += numStep) {
      result.innerHTML += `${i} &#128073; `;
    }
    result.innerHTML += `&#10004;&#65039;`;
  } else {
    alert("Erro: Forma do passo invalida, tente passo -1");
  }
}
