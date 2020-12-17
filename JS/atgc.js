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

function reversing(sequence){
    return sequence.split("").reverse().join('')
 }

 function complementReverse(sequence){
     return complement(reversing(sequence))
 }

//  function complementReverse(sequence){
//     let complemented = complement(sequence)
//     return reversing(complimented)
// }