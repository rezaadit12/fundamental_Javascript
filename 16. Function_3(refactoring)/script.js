
// =========| SEBELUM REFACTORING |=========
/*
function pertambahan(a, b){

    var hasilA;
    var hasilB;
    var result;

    hasilA = a + a + b;
    hasilB = b + b + a;

    result = hasilA + hasilB;
    return result;
}

console.log(pertambahan(12,89));
*/


// =========| SETELAH REFACTORING |=========

function pertambahan(a, b){
    return a + a + b + b + b + a;
}
console.log(pertambahan(5,4));
