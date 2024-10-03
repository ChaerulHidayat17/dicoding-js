const name = "Chaerul";
const age = 24;
console.log(`Nama Saya ${name}, Umur Saya ${age}`);

// Materi Comentar
// Ini Akan di abaikan karena tag comentar
console.log("Ini Komentar") // ini akan di eksekusi

/*
 * TODO
 * 1. Buatlah variabel bernama `PI` dan isikan dengan nilai 3.14
 * 2. Cetak nilai variabel PI di terminal menggunakan console.log
 */
const PI = 3.14;
console.log(PI);

const id = 123;
let username = "Chaerul";

console.log(id); //Output nya 123
console.log(username); //Output nya Chaerul

/*Perbedaan dari variabel yang dibuat dengan const dan let adalah variabel yang dibuat dengan const tidak dapat diinisialisasi ulang (sederhananya, diubah) nilainya, sedangkan jika variabel dibuat dengan let, kita bisa menginisialisasi ulang nilainya. */

let hewan = "Kucing";
console.log(`Sebelum di ubah output nya ${hewan}`); // Sebelum di ubah output nya Kucing 
hewan = "Sapi";
console.log(`Setelah di ubah output nya ${hewan}`); // Setelah di ubah output nya Sapi

// Materi Tipe Data
/* String adalah tipe data yang merepresentasikan teks. Data seperti nama, alamat, atau email adalah contoh data yang dikelola dalam bentuk string. Dalam JavaScript, nilai string diapit oleh tanda kutip. Ada tiga jenis tanda kutip yang dapat digunakan untuk membuat nilai string, yaitu petik tunggal (single quote), petik ganda (double quote), dan backticks (tanda backtick). */

// "ini adalah contoh string" 

// Backtick String
const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;
console.log(text);

/*  (Number) Semua data berupa angka direpresentasikan dalam tipe data number, baik itu bilangan bulat maupun pecahan */
// Contoh = 3, 3.14, 3.333

const number = 50 / 0;
console.log(number); // Hasil nya Infinity

const result = Number("Dicoding");
console.log(result); // Hasil na NaN

/* Boolean
Boolean adalah tipe data yang hanya memiliki dua nilai: true dan false. Boolean umumnya digunakan untuk merepresentasikan “ya” atau “tidak”, “ya” adalah true dan “tidak” adalah false. */
// Contoh Boolean

const completed = true;
const passed = false;
console.log(completed, passed); // Output nya True dan False

const final = 5 > 2;
console.log(final);

/* Nilai Kosong
JavaScript memiliki dua nilai spesial yang merepresentasikan nilai kosong, yaitu null dan undefined. Keduanya digunakan untuk menunjukkan ketiadaan nilai (the absence of something). */

const kosong = null;
console.log(kosong); // output nya Null

let pesan;
console.log(pesan); // Hasil nya Undifined

// Mengubah Ke String
/* Untuk mengubah suatu tipe data ke bentuk string umumnya dapat dilakukan dengan dua cara, yaitu menggunakan fungsi String() dan method .toString(). Berikut adalah contoh dari penggunaan kedua cara tersebut. */
{
    const number = 123;
    const boolean = true;

    const strNumber = String(number);
    const strBoolean = boolean.toString();

    console.log(strNumber); // Output nya "123"
    console.log(strBoolean) // Output nya true
}

/* Mengubah ke Number
Secara umum, untuk mengubah bentuk numerik, seperti “10”, “3.14” dapat dilakukan dengan menggunakan fungsi Number(). Berikut contoh penggunaannya.*/

const strNumber = 123;
const strFloat = '3.14';
const boolean = true;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1

/* Fungsi parseInt() digunakan untuk mengonversi string menjadi bilangan bulat (integer). Fungsi ini memiliki kemampuan untuk membaca karakter satu per satu. Ketika menemukan karakter yang tidak bisa diubah menjadi angka, proses konversi terhenti di sana. Dengan kemampuan ini, parseInt() dapat digunakan untuk mengubah nilai string, seperti "20CM", "64px", atau angka dengan satuan lainnya. */

const cm = '20cm;'
const px = '64px';

const intFromCm = parseInt(cm);
const intFromPx = parseInt(px);

console.log(intFromCm); // Output ya 20
console.log(intFromPx); // Output ya 64

/* Adapun fungsi parseFloat() digunakan untuk mengonversi string menjadi angka desimal (floating-point number). Sama seperti parseInt(), fungsi ini juga memiliki kemampuan membaca karakter string satu per satu sehingga dapat mengubah numerik yang mengandung satuan */

{
    const cm = '20.55cm';
    const px = '64.23px';

    const floatFromCm = parseFloat(cm);
    const floatFromPx = parseFloat(px);

    console.log(floatFromCm); // outputnya 20.55
    console.log(floatFromPx); // outputnya 64.23
}

/* Mengubah ke Boolean
Untuk mengubah suatu nilai ke tipe data boolean, kita bisa gunakan fungsi Boolean(). Sama seperti fungsi sebelumnya, kita cukup memberikan nilai yang akan diubah di antara tanda kurung. Berikut adalah contoh penggunaan fungsi Boolean(). */

{
    const number = 123;
    const string = 'Dicoding';
    const empty = null;

    const boolFromNumber = Boolean(123);
    const boolFromString = Boolean(string);
    const boolFromNull = Boolean(empty);

    console.log(boolFromNumber); // output: true
    console.log(boolFromString); // output: true
    console.log(boolFromNull); // output: falsegi
}

// Operator
/* Secara umum, operator dalam JavaScript terbagi menjadi tiga kelompok: unary, binary, dan ternary. Pengelompokan ini berdasarkan jumlah operan yang diperlukan untuk menggunakan suatu operator. */

{
    let age = 24;

    // Unary operator
    typeof age;

    // Binary Operator
    5 + 4;
    10 / 2;
    age = 30;

    // Ternary operator
    (age < 8) ? 'You are to young' : 'Wellcome on board';
}

// Assignment Operator
// Digunakan untuk menginisiasi nilai
{
    const name = "Chaerul";
    let location = "Bekasi";

    location = "Cikarang"; // Digunakan untuk mengubah nilai

}

// // Arithmetic Operator
// 6 + 5; // mengembalikan 11
// 7 - 2; // mengembalikan 5
// 8 * 5; // mengembalikan 40
// 10 / 3; // mengembalikan 3.33
// 10 % 2; // mengembalikan 0
// 2 (10 + 2); // mengembalikan 24


// Comparison Operator
{
    let a = 90;

    if (a == 90) {
        console.log("Nilai A");
    }
    else if (a == 80) {
        console.log("Nilai B");
    }
    else if (a == 70) {
        console.log("Nilai C")
    }
    else {
        console.log("Nilai E")
    }
}

/*  Logical Operator
Operator logika digunakan untuk menetapkan logika dari dua nilai operan boolean. Dengan operator logika, kita bisa melakukan operasi gerbang logika, seperti AND dan OR. Operator logika dapat digunakan untuk menetapkan logika yang lebih kompleks.*/

{
    let nilai = 90;
    let absen = 90;
    let hasil = 'Lulus';

    if ( nilai >= 80 && absen >= 90 && hasil === 'Lulus'){
        console.log("Siswa Lulus");
    }
    else {
        console.log("Siswa Tidak Lulus");
    }
}