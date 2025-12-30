const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};


function exibirRelatorio (obj) {
  console.log (`Categorias avaliadas:`, Object.keys(obj));
  console.log (`Valores registrados:`, Object.values(obj));
  for (let resultado in obj) {
    obj[resultado] > 50 ? console.log (`${resultado}: ${obj[resultado]} (alerta)`) : console.log (`${resultado}: ${obj[resultado]} (ok)`) 
  }
}


exibirRelatorio (relatorio)
