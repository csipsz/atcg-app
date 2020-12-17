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

function GCfrequency(sequence){
    let frequency = {'A': 0, 'T': 0, 'G': 0, 'C': 0}; 
    sequence.split('').forEach(function(base){
        frequency[base] != 0 ? frequency[base]++ : frequency[base] = 1; 
    })
    return frequency
}

function GCpercent(sequence){
    let baseHash = GCfrequency(sequence)
    let GCcount = baseHash['C'] + baseHash['G']
    let percentage = (GCcount / sequence.length) * 100
    console.log("The percentage is " + percentage)
}