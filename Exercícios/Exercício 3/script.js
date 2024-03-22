function verificar() {
  var data = new Date();
  var year = data.getFullYear();
  var birth = document.querySelector("#yearBirth").value;
  var res = document.querySelector("#res");

  if (birth.length == 0 || parseInt(birth) > year) {
    alert("Data Inválida");
  } else {
    var sexResult = document.getElementsByName("sex");
    var age = year - parseInt(birth);
    var gender = "";

    var img = document.createElement("img");
    img.setAttribute("id", "photo");

    if (sexResult[0].checked) {
      gender = "Homem";
      if (age < 12) {
        img.setAttribute("src", "./img/criancaHomem.jpg");
      } else if (age < 21) {
        img.setAttribute("src", "./img/jovemHomem.jpg");
      } else if (age < 50) {
        img.setAttribute("src", "./img/adultoHomem.jpg");
      } else {
        img.setAttribute("src", "./img/idosoHomem.jpg");
      }
    } else {
      gender = "Mulher";
      if (age < 12) {
        img.setAttribute("src", "./img/criancaMulher.jpg");
      } else if (age < 21) {
        img.setAttribute("src", "./img/jovemMulher.jpg");
      } else if (age < 50) {
        img.setAttribute("src", "./img/adultoMulher.jpg");
      } else {
        img.setAttribute("src", "./img/idosoMulher.jpg");
      }
    }

    res.style.textAlign = "center";
    res.innerHTML = `<p>Detectado ${gender} com ${age} anos</p>`;
    res.appendChild(img); 
  }
}
