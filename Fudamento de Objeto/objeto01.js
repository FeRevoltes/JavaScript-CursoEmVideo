let pessoa = {
  nome: "José",
  sexo: "M",
  peso: 85.4,
  engodar(p = 0) {
    this.peso += p;
  },
};
console.log(`${pessoa.nome} pesa ${pessoa.peso}`);

pessoa.engodar(2);
console.log(`${pessoa.nome} pesa ${pessoa.peso}`);
