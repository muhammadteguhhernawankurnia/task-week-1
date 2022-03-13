// const hobby = ['swimming', 'gamming']
// const allHobby = [...hobby, 'programming']

// console.log(allHobby)

// const obj1 = {fou : "bar"}
// const obj2 = {bar : "fou"}
// const allObject = {...obj1,...obj2,fou:"Bagus",barr:"Tri"}

// console.log(allObject)

const obj = {nama: "Bagus"}
const arr = [1]
const result ={...obj,...arr}//nilai dari array akan dapat dimasukan ke object dengan property mengambil dari index
const result =[obj,...arr]//harus seperti ini jadi object tidak menerapkan spread operator agar tidak error
console.log(result)