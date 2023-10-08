// splice = menyisipkan elemen di tengah tengan array
// splice 
// (indexAwal, mauDihapusBerapa, mauDitambahBerapa, ditambahKe-2, ditambahKe-3)


var arr = ['muhamad', 'reza', 'aditya'];


arr.splice(2, 0 , 'jabar', 'abdul')
console.log(arr.join(' - '))

arr.splice(1, 4, 'tSangIrfan');
console.log(arr.join(' - '))



// slice = mengiris sebuah array menjadi array baru
// slice(awal, akhir)

var arr = ['adit', 'reza', 'muhamad']

var arr2 = arr.slice(1, 3);
console.log(arr.join(' - '))
