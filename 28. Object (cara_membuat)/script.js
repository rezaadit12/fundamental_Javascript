/** 
 * membuat object pada javascript:
 * 1. Object literal = seperti cara pertama kali
 * 2. function declaration
 * 3. constructor function (keyword new)
 * 4. object.create()
 */


// 1. Object Literal 

var murid = {
    nama : "Muhamad Reza Aditya", 
    umur : 12 ,
    alamat : "Cipayung"
}



// 2. Function Declaration

function buatObjectMurid(nama, umur, alamat){
    var mrd = {};
    mrd.nama = nama;
    mrd.umur = umur;
    mrd.alamat = alamat;
    return mrd;
}

var mrd1 = buatObjectMurid('aditya', 18, 'Puncak')



// 3. Constructor 

function Murid(nama, umur, alamat){
    this.nama = nama;
    this.umur = umur;
    this.alamat = alamat;
}

var mrd2 = new Murid('reza', 19, 'Cisarua')