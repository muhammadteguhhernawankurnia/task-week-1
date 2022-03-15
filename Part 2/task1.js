//1. forEach()
// forEach adalah built-in function yang berfungsi untuk memanggil setiap element dalam array.
// const movie = ['harry potter', 'chucky', 'negeri dongeng']
// movie.forEach((element, index, array)=>{
//     console.log(element, index, array)
// })

//2. find()
// find adalah built-in function yang berfungsi untuk mencari element pertama yang sesuai dengan yang diharapkan.
// const animal = ['ikan channa', 'ikan cupang', 'ikan cue']
// const found = animal.find((element, index, array)=> element == 'ikan channa' ) 
// console.log(found)

//3. reverse()
// reverse adalah built-in function yang berfungsi untuk membalikan element dalam array, contoh elemen dalam array 
// yang pertama menjadi yang terakhir dan begitu pula sebaliknya.
// const number = [1, 2, 3]
// const reversed  = number.reverse()
// console.log(reversed)

//4. join()
// join adalah built-in function yang berfungsi untuk menggabungkan semua element array menjadi string dipisahkan
// oleh koma atau pemisah yang ditentukan.
// const gunung = ['semeru', 'rinjani', 'manglayang']
// console.log(gunung.join(' spasi '))

//5. shift()
// shift adalah built-in function yang berfungsi untuk menghapus element awal di array.
// const animal = ['komodo', 'singa', 'macan', 'hiu', 'lumba-lumba'];
// animal.shift()
// console.log(animal);
// yang hilang 

//6. pop()
// pop adalah built-in function yang berfungsi untuk menghapus element terkahir di array.
// const animal = ['komodo', 'singa', 'macan', 'hiu', 'lumba-lumba'];
// animal.pop()
// console.log(animal);
// yang hilang lumba-lumba

//7. push()
// push adalah built-in function yang berfungsi untuk menambahkan element ke dalam array.
// const animals = ['sheep', 'fish', 'ant'];
// const add = animals.push('dinosaurus');
// console.log(animals);

//8. indexOf()
// indexOf adalah built-in function yang berfungsi mencari indeks dari element.
// const onePiece = ['Luffy', 'Zoro', 'Nami', 'Usopp']
// console.log(onePiece.indexOf('Nami'))

//9. slice()
// slice adalah built-in function yang berfungsi untuk memotong array, dimana awal dan akhir mewakili indeks item 
// dalam array itu.
// const onePiece =  ['Luffy', 'Zoro', 'Nami', 'Usopp']
// console.log(onePiece.slice(2))

// 10. sort()
// sort adalah built-in function yang berfungsi untuk mengurutkan element.
// const onePiece =  ['Luffy', 'Zoro', 'Nami', 'Usopp']
// onePiece.sort()
// console.log(onePiece)
