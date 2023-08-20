/*
  Matrice: calcul des distances entre des nombres et une destination.
  Parcours à l'horizontale et à la verticale.
  '*' est une zone de déplacement.
  '#' est la destination.
  Pas de collisions.
*/

let matrice = [
  [ 1, '*', '*', '*', '*', '*', 3 ],
  [ '*', '*', '*', '*', '*', '*', '#' ],
  [ '*', '*', 2, '*', '*', '*', '*' ]
];

let tableauDesDistances = [];

function calculDesDistances(array, i, j) {
  for (let k = 0; k < array.length; k++) {
    for (let l = 0; l < array[k].length; l++) {
      if (typeof array[k][l] === 'number') {
        // Calcul des distances entre les nombres de la matrice et '#'.
        tableauDesDistances.push(Math.abs(k - i) + Math.abs(l - j));
        // Donc Math.abs(0 - 1) + Math.abs(0 - 6) donc -1+-6 donc 1+6 donc 7 donc 1 est à une distance de 7 par rapport à '#'.
        // Donc Math.abs(0 - 1) + Math.abs(6 - 6) donc -1+0 donc 1+0 donc 1 donc 3 est à une distance de 1 par rapport à '#'.
        // Donc Math.abs(2 - 1) + Math.abs(2 - 6) donc 1+-4 donc 1+4 donc 5 donc 2 est à une distance de 5 par rapport à '#'.
      }
    }
  }
  return tableauDesDistances;
}

for (let i = 0; i < matrice.length; i++) {
  for (let j = 0; j < matrice[i].length; j++) {
    if (matrice[i][j] === '#') {
      let result = calculDesDistances(matrice, i, j);
      console.log(result);
      // [ 7, 1, 5 ]
    }
  }
}