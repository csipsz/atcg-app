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
            case 'N': 
                reversed.push('N')
                break;
            default: 
                reversed.push('X')
                break;
        }
    }
    return reversed.join('')
}




function cleanUp(sequence){
    let cleanedSequence = []
    sequence.split('').forEach(function(c){
        if (c != 'A' && c != 'T' && c != 'G' && c != 'C' && c != 'N'){
            cleanedSequence.push('X')
        } else {
            cleanedSequence.push(c)
        }
    })
    return cleanedSequence.join('')
}

function reversing(sequence){
    let cleanSeq = cleanUp(sequence)
    return cleanSeq.split("").reverse().join('')
 }

 function complementReverse(sequence){
     return complement(reversing(sequence))
 }

//  function complementReverse(sequence){
//     let complemented = complement(sequence)
//     return reversing(complimented)
// }

function GCfrequency(sequence){
    let frequency = {'A': 0, 'T': 0, 'G': 0, 'C': 0, 'N': 0, 'X': 0}; 
    cleanUp(sequence).split('').forEach(function(base){
        frequency[base] != 0 ? frequency[base]++ : frequency[base] = 1; 
    })
    return frequency
}

function GCpercent(sequence){
    let baseHash = GCfrequency(sequence)
    let GCcount = baseHash['C'] + baseHash['G']
    let nonVal = baseHash['N'] + baseHash['X']
    console.log(nonVal)
    let percentage = (GCcount / (sequence.length - (baseHash['N'] + baseHash['X']))) * 100
    return `The GC % is ${percentage.toString().split('.')[0]}`
}


