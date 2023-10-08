var penumpang = ['reza', undefined, 'adit'];

var tambahPenumpang = function(namaPenumpang, isiPenumpang){
    
    if(penumpang.length == 0){
        penumpang.push(namaPenumpang)
        return penumpang;
    }else{
        for(i = 0; i < penumpang.length; i++){
            if(penumpang[i] == undefined){
                penumpang[i] = namaPenumpang
                return penumpang
            }else if(penumpang[i] == namaPenumpang){
                console.log(namaPenumpang + " sudah ada di angkot")
                return penumpang
            }else if(i == penumpang.length - 1){
                penumpang.push(namaPenumpang)
                return penumpang
            }
        }
    }

}



console.log(tambahPenumpang())

    
    
    
    
    




