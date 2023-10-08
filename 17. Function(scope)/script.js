/* 
scope/lingkup variabel

Scope, sesuai namanya yang berarti cakupan/jangkauan,
dalam konteks eksekusi aplikasi javascript Scope memiliki
artian dimana value dan expressions dapat dicakupan/dijangkau 
untuk diakses.
*/

var a = 3
function test(){
    var a = 1;
}
test()
console.log(a)//maka yang diakses di luar dari function = 3 


//==================================================
var b = 4

function test1(b){
    console.log(b)
}

test1(b);