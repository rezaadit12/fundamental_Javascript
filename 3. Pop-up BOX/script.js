

// alert
alert('Hello world!');

//prompt
prompt('test prompt:');
// =====================

// contoh pengaplikasian
var nama = prompt('masukan nama:');
alert('nama anda adalah ' + nama);
//


// confirm
confirm('kamu yakin?');
// =====================


// contoh pengaplikasian
var tes = confirm('kamu yakin?')

if(tes === true){
    alert('user menekan ok!');
}else{
    alert('user menekan cancel')
}
//====================



// contoh penggabungann semuanya dengan perulangan

alert('selamat datang');

var lagi = true;

while( lagi ){
    var nama = prompt("Masukkan Nama Anda");
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih!');