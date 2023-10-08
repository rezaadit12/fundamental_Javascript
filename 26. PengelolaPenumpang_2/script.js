var penumpang = [];

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


var hapusPenumpang = function(nama, isi){

    if(penumpang.length == 0){
        console.log("angkot masih kosong")
    }else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == nama){
                penumpang[i] = undefined
                return penumpang
            }else if(i == penumpang.length - 1){
                console.log(nama + " tidak ada di dalam angkot")
                return penumpang
            }
        }
    }

    return penumpang

}




    
    
    
    
    




