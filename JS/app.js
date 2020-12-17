let complementDiv = () => document.querySelector("#complement")
let reverseDiv = () => document.querySelector("#reverse")
let revcompDiv = () => document.querySelector("#reverse-complement")

let sequence = []

const handleChange = (event) => {
    event.preventDefault();
    sequence = event.target.value.toUpperCase();
    event.target.value = event.target.value.toUpperCase();
    
    complementDiv().textContent = complement(sequence)
    reverseDiv().textContent = reversing(sequence)
    revcompDiv().textContent = sequence

    
}


function reversing(sequence){
   return sequence.split("").reverse().join('')
}

