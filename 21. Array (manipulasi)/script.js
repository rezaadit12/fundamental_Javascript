/*
    Manipulasi pada array : 

    1. Menambah elemen pada array
    2. Menghapus elemen pada array
    3. Menampilkan seluruh isi array

*/


// 1. Menambah isi array  

    var arr = []
    arr[0] = 'muhamad'
    arr[1] = 'reza'
    arr[2] = 'adit'

    console.log(arr)


// 2. Menghapus isi array

    var arr2 = ['reza', 'adit', 'muhamad']
    arr2[1] = undefined;
    console.log(arr2)


// 3. Menampilkan isi array 

    var arr3 = ['reza', 'adit', 'muhamad']

    for(i = 0; i < arr3.length; i++){
        console.log('Data ke-' + i + " " + arr3[i])
    }


//==============================================================

//1. join 
    console.log(arr3.join(' - '))


//2. push dan pop

//push = menambah elemen di akhir array
arr3.push('jibril', 'jaya')
console.log(arr3.join(' - '))

//pop  = menghapus elemen akhir array
arr3.pop()
console.log(arr3.join(' - '))

//3. unshift dan shift

//unshift = menambah elemen pertama pada array
arr3.unshift('mikael')
console.log(arr3.join(' - '))


//shift = menghapus elemen pertama pada array
arr3.shift()
console.log(arr3.join(' - '))


