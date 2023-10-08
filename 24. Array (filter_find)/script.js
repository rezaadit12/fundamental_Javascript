// filter and find

// filter fungsinya untuk mencari nilai pada array dan mengembalikannya dalam bentuk array
// find dia hanya mencari satu nilai(tidak menghasilkan array)


var arr = [1,2,3,4,5,6,7,8,9]

var arr2 = arr.filter(function(x){
    return x >= 3
})

console.log(arr2.join(' - '))

//==============================================



var arr4 = arr.find(function(x){
    return x > 5
})

console.log(arr4)