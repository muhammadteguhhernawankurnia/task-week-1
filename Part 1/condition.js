// if (condition){
//     console.log(true)
//     }else{
//     console.log(false)
// }

// if (1==1){
//     console.log(true)
//     }else{
//     console.log(false)
// }

//Truthy = True | 1 | angka selain 0 | "string yang terisi"
//Falsy = False | 0 | "" | null | undifiend | NaN

// const data =""
// if (data){
//     console.log(true)
//     }else{
//     console.log(false)
// }

//untuk pengecekan array if(data.length > 0)
//untuk pengecekan object if(data.name)
//untuk pengecekan Nan if(IsNan(data))

//Switch Case
// const phone = "Nokia"

// switch (phone){
//     case "Nokia":{
//         console.log("Hp Anda Nokia")
//         break
//     }
//     case "Apple":{
//         console.log("Hp Anda Apple")
//         break
//     }
//     default: {
//         console.log("Hp Anda Tidak terdaftar")
//     }
// }

//else if (kalo banyak)
// const harga = 5000
// if (harga > 10000){
//     console.log("Mahal")
// } else if (harga > 5000){
//     console.log("Sedang")
// } else if (harga > 3000){
//     console.log("Lumayan Murah")
// } else {
//     console.log("Murah")
// }

//ternery (sedikit)
// harga > 10000 ? console.log("Mahal") : harga > 5000 ? console.log("Sedang") : harga > 3000 ? console.log("Lumayan Murah") : console.log("Murah")
// harga > 10000 ? console.log("Mahal") //Error : Unexpected end of input

//Short Logic
// && = jika kondisinya true maka akan melanjutkan ke proses berikutnya, jika false maka nilai tsb yg akan ditetapkan
// || = jika kondisinya false maka akan melanjutkan ke proses berikutnya, jika true maka nilai tsb yang akan ditetapkan

// const nama = "Bagus"
// if (nama){
//     nama = nama
// } else {
//     nama = "Anonymous"
// }
// console.log(nama)

let nama = "Bagus"
nama = nama || "Anonymous"
console.log(nama)
