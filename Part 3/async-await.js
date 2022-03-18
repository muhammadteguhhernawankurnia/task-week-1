// arrow function
// const getData = async () =>{
//     try{
//         // await in here
//         }catch(error){
//             console.log(error)
//     }
// }

// declaration function
// async function getData (){
    // try{
        // await in here
    // }catch (error){
        // console.log(error)
    // }
// }

// expression function ES5
// const getData = async function (){
    // try{
            // await in here
        // }catch (error){
            // console.log(error)
    // }
// }
// get data ()

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

const cetakLuas = (luas) => new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('proses 3 mencetak luas = ' + luas)
        resolve (luas)
    }, 4000);
})

async function hitung(){
    try{
        const r = 7
        const phi = await menentukanPhi(r)
        const luas = await hitungLuas(phi, r)
        await cetakLuas(luas)
    }catch(error){
        console.log(error)
    }
}
hitung()