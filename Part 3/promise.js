// const getData = () => {
//     const data = []
//     if (data.length > 0) {
//         return data
//     } else {
//         return new Error ('data tidak ada')
//     }
// }
// console.log(getData())

//without function
// const getData = new Promise ((resolve, reject) => {
//     const data = []
//     if (data.length > 0) {
//         //return data
//         resolve (data)
//     } else {
//         // return new Error ('data tidak ada')
//         reject(new Error ('data tidak ada'))
//     }
// })

//with function
// const getData = () => new Promise ((resolve, reject) => {
//     const data = []
//     if (data.length > 0) {
//         //return data
//         resolve (data)
//     } else {
//         // return new Error ('data tidak ada')
//         reject(new Error ('data tidak ada'))
//         //new Error adalah error yang dibuat untuk program berhenti
//     }
// })

//handling resolve dengan .the() supaya tidak ada notice promise dan kurawal
// getData().then((result) => {
//     console.log(result)
//     result.map(item => console.log(item))
// }).catch((error) => {
//     console.log('proses error berjalan')
//     console.log(error)
// }).finally(() => {
//     console.log('proses berakhir')
// })

// .then() berhasil
// .cacth() gagal
// .finally() adalah suatu proses yang akan berjalan ketika ia sudah menajalan proses di atas baik salah atau benar

//===========================================================
// handle asynchronous
const menentukanPhi = (r) => new Promise ((resolve, reject) => {
    let phi
    setTimeout(() => {
        if (typeof r !== "number"){
            reject(new Error('jari-jari harus angka'))
        } else {
            if (r % 7 === 0){
                phi = 22 / 7
            } else {
                phi = 3.14
            }
            console.log('proses 1 mencari phi = ' + phi)
            resolve(phi)
        }
    }, 2000);
})


const hitungLuas = (phi, r) => new Promise((resolve, reject) => {
    let luas
    setTimeout(() => {
        luas = phi * r * r
        console.log('proses 2 menghitung luas = ' + luas)
        resolve (luas)
    }, 3000);
})

const cetakLuas = (luas) => {
    setTimeout(() => {
        console.log('proses 3 mencetak luas = ' + luas)
    }, 4000);
}

// cara 1
// const r = 7
// menentukanPhi (r).then((result) =>{
//     //result = phi
//     hitungLuas(result, r).then((result) => {
//         //result = luas
//         cetakLuas(result)
//     })
// })
//resorve ditampung di result

//cara 2
const r = 7
menentukanPhi(r)
.then((phi) => hitungLuas (phi, r))
.then((luas) => cetakLuas (luas))
.catch((error) => console.log(error))