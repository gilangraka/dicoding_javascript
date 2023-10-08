function TarikTunai(uangDitarik, Saldo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (uangDitarik > Saldo) {
        reject(new Error("Tidak Bisa Tarik Tunai. Saldo Tidak Cukup!"));
      }
      resolve(uangDitarik);
    }, 3000);
  });
}

function BeliTiket(uangTunai) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (uangTunai < 75000) {
        reject(new Error("Uang Kamu Tidak Cukup! Tidak Bisa Membeli Tiket."));
      }
      resolve("Tiket-1");
    }, 3000);
  });
}

function masukBioskop(tiket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!tiket) {
        reject(new Error("Silahkan Beli Tiket Terlebih Dahulu"));
      }
      resolve("Selamat Menonton~");
    }, 3000);
  });
}

function lihatMovie() {
  TarikTunai(100000, 2000000)
    .then((uangTunai) => {
      return BeliTiket(uangTunai);
    })
    .then((tiket) => {
      return masukBioskop(tiket);
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
