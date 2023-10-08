// foreach and map

var nama = ['muhamad', 'reza', 'aditya'];
var angka = [1,2,3,4,5,6,7,8,9];

// ==========foreach====================================
angka.forEach(function(e){
    console.log(e)
})


nama.forEach(function(e, i){
    console.log('index ke '+ (i+1) +' adalah :'+ e);  
})

// =====================================================

// ================= map =============================

var angka2 = angka.map(function(e){
    return e * 2;
})

console.log(angka2.join(' - '));
// ====================================================


// ================= short ==========================
// short = mengurutkan nilai array


var angka3 = [9,8,20,7,10,6,5,4,3,2,1]
angka3.sort();
console.log(angka3.join(' - '))
// ------------------- error karna mengurutkan dilihat dari biilangan depannya. solusinya

angka3.sort(function(a,b){
    return a-b;
})
console.log(angka3.join(' - '))