//closure
// const tambahAngka = function () {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// };

// const tambah = tambahAngka();

// tambah();
// tambah();
// tambah();

//IIFE
// versi function biasa
// (function () {
//   console.log('fungsi ini hanya di eksekusi satu kali');
//   const isPrivate = 23;
// })();

// //versi arrow function
// (() => console.log('Fungsi ini hanya di eksekusi satu kali'))

// first class function
// const tambah = (a,b) => a + b;
// console.log(tambah(10, 15))

// const Mahasiswa = {
//   nama : "Raju",
//   tampilkanNama: function() {
//     console.log(this.nama);
//   }
// }
// Mahasiswa.tampilkanNama();
// higher oreder function
/*
const sayHello = () => console.log('Hallo');
const btn = document.body.querySelector(".button"); // misalkan ada btn di markup
btn.addEventListener('click', sayHello);
*/

// callbacks
// const ubahAwalHuruf = function(str){
//   const hasil = str.charAt(0).toUpperCase() + str.slice(1);
//   return hasil;
// }

// const satuKata = function(str){
//   return str.replace(/ /g, '').toLowerCase();
// }

// const ubahKata = function(str,fn){
//   console.log("Kata yang di ubah menjadi :", fn(str));
// }
// ubahKata("raja saputera", satuKata);
// ubahKata("ahmad jamil", ubahAwalHuruf);

// promise

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const waiting = async function(){
  await wait(1);
  console.log("1 detik");
  await wait(1);
  console.log("2 detik");
}

waiting();