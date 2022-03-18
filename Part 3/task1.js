const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// a. then catch (promise)
// Pertama saya deklarasikan variable const day yang berisi data hari yang akan dicek dalam bentuk string, kemudian saya
// deklarasikan data function "cekHariKerja" dan parameter yang berisi day, dimana function ini nantinya akan mengecek data
// yang ada di dalam array dataDay. Kemudian mereturn/mengembalikan item yang dicek isi dan typenya dengan day (hari dalam
// array). Apabila .then hari yang dicek ada dalam array maka akan menampilkan console hari tersebut. Apabila hari
// yang dicek dalam variabel tidak ada/ .catch maka akan muncul error 'Hari ini bukan hari kerja'.

const day = "sabtu";
cekHariKerja(day)
  .then((day) => console.log(day))
  .catch((error) => console.log(error));

// b. try catch (async-await)
// Pertama buat async untuk merubah function menjadi asynchronus, kemudian membuat function baru untuk
// menampung data dengan ketentuan data true/ try masukan variable yang akan dicek. Selanjutnya buat variable
// baru untuk menampung hasil function dan masukan parameternya kalau disini saya masukan day. Masukan await di depan
// function yang berfungsi untuk menunda eksekusi hingga proses asynchorus selesai dan akan memunculkan console log
// hari kerja yang telah dicek. Apabila proses false/ catch maka akan muncul error dengan console log 'Hari ini bukan
// hari kerja'.

async function cek() {
  try {
    const day = "minggu";
    const cekDay = await cekHariKerja(day);
    console.log(cekDay);
  } catch (error) {
    console.log(error);
  }
}
cek();
