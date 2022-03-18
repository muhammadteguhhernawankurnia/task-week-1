const cekKruMugiwara = (kru) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataMugiwara = [
        "luffy",
        "zoro",
        "nami",
        "usopp",
        "sanji",
        "chopper",
        "robbin",
      ];
      let cek = dataMugiwara.find((item) => {
        return item === kru;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("bukan kru mugiwara"));
      }
    }, 1000);
  });
};

const kru = "voldemort";
cekKruMugiwara(kru)
  .then((kru) => console.log(kru + " adalah kru mugiwara"))
  .catch((error) => console.log(error));

//================================================================

// const menentukanLuas = (s) => new Promise ((resolve, reject) => {
//     let luas
//     setTimeout(() => {
//         if (typeof s !== "number"){
//             reject(new Error('sisi harus angka'))
//         } else {
//                 luas = s * s
//                 console.log('luas persegi adalah = ' + luas + ' cm')
//             resolve(luas)
//         }
//     }, 2000);
// })

// const s = 20
// menentukanLuas(s)
// .then ((luas) => (luas))
// .catch((error) => console.log(error))
