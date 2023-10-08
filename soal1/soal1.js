const prompt = require('prompt-sync')({sigint: true});
const number = prompt('Isi angka: ');

let x = number;

function calcSqrt(x) {
  return Math.sqrt(x);
}

if (x < 0) {
    console.log("Tidak bisa input bilangan negatif");
} else if (x % 2 != 0)
 {
    console.log("Tidak bisa input bilangan ganjil");
} else {
    console.log("Sukses jawabannya adalah " + calcSqrt(x))
} 



