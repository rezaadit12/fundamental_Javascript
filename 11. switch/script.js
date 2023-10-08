

    alert('contoh pertama dengan break')

    var value = parseInt(prompt('Masukan Nilai')) 
    /* karna kita menggunakan prompt yang nilainya selalu string
        maka kita gunakan "parseInt" untuk mengubah string jadi integer
    */

    // switch bisa seperti ini 
    switch(value){
        case 1: 
            alert("Nilai 1");
            break;
        case 2  :
            alert("Nilai 2");
            break;
        default:
            alert('invalid nomber');
            break;
    }

    alert('contoh kedua tanpa break')

    // bisa juga seperti ini (bedanya ini tanpa break)
    var food = prompt('Anda sarapan dengan apa?')

    switch(food){
        case 'nasi' :
        case 'roti' :
        case 'daging' : 
            alert(food + ' adalah makanan sehat')
            break;
        case 'pizza':
        case 'burger':
            alert(food + ' adalah makanan tidak sehat')
            break;
        default :
            alert('Data makanan tidak ditemukan')
            break;
    }


