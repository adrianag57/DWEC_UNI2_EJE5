const size = 50;
const defaultValue = 0;

let arrayManual = new Array(size);

function llenarArray(array){

    for (let i = 0; i < array.length; i++) {

        array[i] = defaultValue;
    }

    return array;
}

console.log(arrayManual.fill(defaultValue));
console.log(llenarArray(arrayManual));