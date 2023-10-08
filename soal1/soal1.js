const prompt = require('prompt-sync')({sigint: true});
console.log("Selamat Datang di Calculator Akar Kuadrat")
const number = prompt('Isi angka genap: ');

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
    console.log(`Sukses! Akar kuadrat dari ${x} adalah ` + calcSqrt(x))
} 




