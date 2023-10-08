/*
    perbedaan function declaration dengan function expression



*/



// contoh function declaration :

tampilPesan(" reza");//ini bisa di panggil sebelum function

    function tampilPesan(nama){
        alert('hallo' + nama);
    }



// contoh function expression :


    var tampilAngka = function ( angka){
        alert('Nomber anda' + angka);
    }

    tampilAngka(12);//ini harus dipanggil sesudah function if(!) = error


