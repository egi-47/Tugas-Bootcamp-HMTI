//1. Buat masing-masing 2 contoh penggunaan if, if-else, if-else-if, if-else-if-else, dan if bersarang
//2. Buat 2 contoh penggunaan looping dgn while yg dikombinasikan dengan if-else
//3. Buat contoh penggunaan Switch case dan for loop di javascript (optional)

//Jawaban No.1

//if
//contoh 1 :
var nama = "vera";
if(nama == "vera"){
	console.log("Nama Benar");
}
//contoh 2 :
var nama="bansal";
if (nama=="bansal")
{
  console.log("Berhasil!");
  console.log("Belajar");
  console.log("JavaScript");
}

//if else
//contoh 1 :
var angka=17;
if (angka%2==0)
  console.log("Angka adalah bilangan genap");
else
  console.log("Angka adalah bilangan ganjil");
//contoh 2 :
var angka=15;
if (angka%2==0) 
{
  console.log("Angka = "+angka);
  console.log("Angka adalah bilangan genap");
}
else
{
   console.log("Angka = "+angka);
   console.log("Angka adalah bilangan ganjil");
}

//if else if
//contoh 1 :
var angka=2;
  
if (angka==1){
   console.log("Angka Satu");
} else if (angka==2){
   console.log("Angka Dua");
}

//contoh 2 :
var angka=3;
  
if (angka==2){
   console.log("Angka Dua");
} else if (angka==3){
   console.log("Angka Tiga");
}

//if else if else
if (1 != 1){
	console.log("1 tidak sama dengan 1")
} else if(1 > 1) {
	console.log("tapi 1 lebih dari 0")
} else {
	console.log("gaskeun kabeh Gan!")
}

//if bersarang
//contoh 1 :
var username = ("Username:");
var password = ("Password:");

if(username == "egi"){
if(password == "123"){
	console.log("Selamat datang Gan!");
} else {
  console.log("Password salah, coba lagi!");
}
} else {
  console.log("Anda tidak terdaftar!");
}

//contoh 2 :
var angka=-12;
 
if (angka%2==0) {
  console.log("Angka = "+angka);
  console.log("Angka adalah bilangan genap");
   if (angka > 0){
  console.log("Angka kecil dari 0");
} else {
  console.log("Angka besar dari 0");
   }
}           

//Jawaban No.2
//contoh : 1
var mobil = "Fortuner";

    if (mobil == "Vario"){
        var angka = 0;
        while (angka < 5){
            console.log("Ini hasil loop : " + angka);
            angka++;
        }
    } else {
        console.log("Ini mobil Fortuner");
    }

//contoh : 2
    var mantan = "Balikan yu"; 

    if (mantan == "Balikan yu"){
        var angka = 1;
        while (angka <= 5){
            console.log(angka + ". Cari lagi Gan!");
            angka++;
        }
    } else {
        console.log("Jangan Balikan");
    }