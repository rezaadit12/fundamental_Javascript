var lagi = true;
while( lagi){
        // menangkap pilihan player
    var p = prompt('Pilih : Gajah, Semut, Orang');
    // menangkap pilihan komputer
    // membangkitkan bilangan random

    var comp = Math.random();

    if( comp <  0.34){
        comp = 'Gajah';
    }else if( comp >= 0.34 && comp < 0.67){
        comp = 'Orang';
    }else{
        comp = 'Semut';
    }

    // menentukan rules
    var hasil = '';

    if( p == comp){
        hasil = 'Seri';
    }else if( p == 'Gajah'){
        hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
    }else if( p == 'Orang'){
        hasil = (comp == 'Gajah') ? 'Kalah' : 'Menang';
    }else if( p == 'Semut'){
        hasil = (comp == 'Orang') ? 'Kalah' : 'Menang';
    }else{
        hasil = 'Memasukan pilihan yang salah';
    }


    alert('kamu memilih : '+p +' dan kokmputer memilih: '+comp+' maka anda: ' +  hasil);
    // tampilkan hasil
    lagi = confirm('Main lagi');
}