let complementBox = () => document.querySelector("#complement")
let reverseBox = () => document.querySelector("#reverse")
let revCompBox = () => document.querySelector("#reverse-complement")

let sequence = []

const handleChange = (event) => {
    event.preventDefault();
    sequence = event.target.value.toUpperCase();
    event.target.value = event.target.value.toUpperCase();
    
    complementBox().textContent = complement(sequence)
    reverseBox().textContent = reversing(sequence)
    revCompBox().textContent = complementReverse(sequence)

    
}




