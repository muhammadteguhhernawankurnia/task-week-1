// function hitungKubus(a, b) {
//   var total;
//   var volumeA;
//   var volumeB;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;

//   return total;
// }

// console.log(hitungKubus(8, 3));
// console.log(hitungKubus(7, 9));

//function
//================================================================

// var jumlahAngkot = 10;
// var noAngkot = 1;
// var angkotBeroperasi = 6;

// while (noAngkot <= angkotBeroperasi) {
//   console.log("Angkot No. " + noAngkot + " berjalan dengan baik.");
//   noAngkot++;
// }

// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
//   console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
// }

// looping, while, for
// =================================================================================

var angka = 2;
if (angka !== "integer") {
  console.log("input number");
} else if (angka % 2 === 0) {
  console.log(angka + " adalah bilangan genap");
} else {
  angka % 2 === 1;
  console.log(angka + " adalah bilangan ganjil");
}
