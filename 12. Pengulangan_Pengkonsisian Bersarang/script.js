let data = '';
var nilai = 10;



for(var a = 0; a < 10; a++){
    for(var b = 0; b < a; b++){
        data += '*'
    }
    data += '\n';
}

for(var a = 10; a > 0; a--){
    for(var b = 0; b < a; b++){
        data += '*';
    }
    data += '\n';
}

console.log(data);