function fazerMedia() {
  let num = [10, 9, 7, 10, 9, 8, 10];
  let soma = 0;
  for (let i = 0; i < num.length; i++) {
    soma += num[i];
  }
  console.log(`A media é ${soma / num.length}`);
}
fazerMedia();
