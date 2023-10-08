var jmlhAngkot = 10;
var noAngkot;

for(noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++){
    if(noAngkot <= 3){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
    }else if( noAngkot <= 6){
        console.log('Angkot No. ' + noAngkot + ' Rusak')
    }
    else{  
        console.log("Angkot No."+ noAngkot +" tidak sedang beroperasi")
    }
}