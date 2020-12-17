let complementDiv = () => document.querySelector("#complement")
let reverseDiv = () => document.querySelector("#reverse")
let revcompDiv = () => document.querySelector("#reverse-complement")

let sequence = []
const handleChange = (event) => {
    event.preventDefault();
    sequence = event.target.value;
    
    complementDiv().textContent = sequence
    reverseDiv().textContent = sequence
    revcompDiv().textContent = sequence
}