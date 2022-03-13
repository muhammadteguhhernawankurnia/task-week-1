function segitiga2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += j;
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(5));

// for (let i = 5; i > 0; i--){
//     let result ="";
//     for (let j = 1; j <= i; j++){
//         console.log(j);
//     }
//     console.log("\n");
// }

// function segitiga2(panjang) {
//     let hasil = '';
//     for (let i = 0; i < panjang; i++) {
//         for (let j = panjang; j > i; j--) {
//             hasil += '*';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(segitiga2(5));

// for(var i = 0; i < 5; i++){
//     console.log('*');
// }
// for (let i = 5; i > 0; i--) {
//     console.log(i)
// }

// for (let i = 5; i > 0; i--){
//     for (let j = i; j > i; j--)
//     console.log(i)
// }

// var s = "";
// for (var i = 5; i > 0; i--){
//     for (var j = 0; j < i; j++){
//         s += "*";
//     }
//     s += "\n";
// }

// console.log(s);