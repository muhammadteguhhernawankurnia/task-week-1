const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    // pengecekan nilai awal lebih kecil dari akhir
    if (nilaiAwal > nilaiAkhir){
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
    // pengecekan jumlah array
    else if(dataArray.length < 5){
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    }
    //pengecekan data array yang memiliki nilai diantara nilai awal dan nilai akhir
    else {
        console.log()
    }
}


// SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
// SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]) // beres
// SeleksiNilai(4, 17, [2, 25, 4]) // beres 
// SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
