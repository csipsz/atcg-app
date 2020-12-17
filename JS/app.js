let complementDiv = () => document.querySelector("#complement")
let reverseDiv = () => document.querySelector("#reverse")
let revcompDiv = () => document.querySelector("#reverse-complement")

let sequence = []
const handleChange = (event) => {
    event.preventDefault();
    sequence = event.target.value.toUpperCase();
    
    complementDiv().textContent = complement(sequence)
    reverseDiv().textContent = sequence
    revcompDiv().textContent = sequence

    //complement(sequence)
}

function complement(sequence) {
    let reversed = []
    for (letter of sequence){
        switch(letter){
            case 'A': 
                reversed.push('T')
                break;
            case 'T': 
                reversed.push('A')
                break;
            case 'C': 
                reversed.push('G')
                break;
            case 'G': 
                reversed.push('C') 
                break;
        }
    }
    return reversed.join('')
}