const size = 50;
const defaultValue = 0;
let arrayManual = new Array(size);

for (let i = 0; i < arrayManual.length; i++) {

    arrayManual[i] = defaultvalue;
}

console.log(arrayManual);

let arrPro = new Array(size);
arrPro.fill(defaultValue);
console.log(arrPro);