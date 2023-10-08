

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