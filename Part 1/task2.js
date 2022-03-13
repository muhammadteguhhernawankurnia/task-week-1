const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69


// || 1 true yang lain jalan
// ini menggunakan if dalam if / nested 
if (mtk == null || bahasaIndonesia == null || bahasaInggris == null || ipa == null ){
    console.log("Data harus terisi semua!")
}
else {
    const total = mtk + bahasaIndonesia + bahasaInggris + ipa 
    const rataRata = total/4

    console.log("Rata-rata = "+rataRata)

    if (rataRata >= 90){
        console.log("Grade = A")
    } else if (rataRata >= 80){
        console.log("Grade = B")
    } else if (rataRata >= 70){
        console.log("Grade = C")
    } else if (rataRata >= 60){
        console.log("Grade = D")
    }else{
        console.log("Grade = E")
    }

}



