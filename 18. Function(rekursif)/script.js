/* 
    Rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
    Rekursif  harus berakhir dan menghasilkan nilai
    kondisinya berhenti disebut dengan base case(kondisi akhir dari rekursif yang menghasilkan nilai)

    semua looping bisa dibuat rekursif tapi tida sebaliknya
*/

// tanpa base case====================
// function tampilAngka(n){
//     console.log(n)
//     return tampilAngka(n-1)
// }

// tampilAngka(10)
// ====================================


// dengan base case ====================
function tampilAngka(n){

    if(n === 0) return;
    console.log(n)
    return tampilAngka(n-1)
}

tampilAngka(10)
// ====================================


function faktorial(n){
    if(n === 0 ) return 1;

    return n * faktorial(n-1);
}


console.log("hasil faktorial: " + faktorial(5))



