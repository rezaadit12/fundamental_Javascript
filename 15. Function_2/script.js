function tambah(){

    var hasil = 0;

    for(var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }

    return hasil;
}

var hasil = tambah(1,2,3);

console.log(hasil);
