const profile ={
    name : "Bagus",
    sister : {
        sister1: "Anna",
        sister2: "Bella"
    }
}

const {sister1: saudaraPerempuan1, sister2} = profile.sister
console.log(saudaraPerempuan1)
console.log(sister2)