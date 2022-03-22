function FazzFood(harga, voucher, jarak, pajak) {
  let diskon, ongkir, kenaPajak;
  if (voucher === "FAZZFOOD50" && harga >= 50000) {
    let cekDiskon = harga * 0.5;
    if (cekDiskon <= 50000) {
      diskon = harga - cekDiskon;
    } else {
      diskon = harga - 50000;
    }
  } else if (voucher === "DITRAKTIR60" && harga >= 25000) {
    let cekDiskon = harga * 0.6;
    if (cekDiskon <= 25000) {
      diskon = harga - cekDiskon;
    } else {
      diskon = harga - 30000;
    }
  }

  if (jarak <= 2) {
    ongkir = 5000;
  } else if (jarak > 2) {
    ongkir = jarak * 3000 - 1000;
  }

  if (pajak == true) {
    bayarPajak = harga * 0.05;
    kenaPajak = bayarPajak;
  }
  console.log("Harga : " + harga);
  console.log("Potongan : " + diskon);
  console.log("Biaya Antar : " + ongkir);
  console.log("Pajak : " + kenaPajak);
  console.log("SubTotal : " + (diskon + ongkir + kenaPajak));
}
FazzFood(75000, "FAZZFOOD50", 5, true);
