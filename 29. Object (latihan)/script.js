

function Angkot(sopir, jurusan, penumpang, kas){
    
    this.sopir = sopir;
    this.jurusan= jurusan;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){

        if(this.penumpang.length === 0 ){
            alert('belum ada penumpang');
            return false;
        }

        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}



var angkot1 = new Angkot("Reza Aditya", ['Cisarua', 'Wangun'], [], 0);
var angkot2 = new Angkot("Jabar Ramadhan", ['Cicurug', 'Medan'], [], 0);