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
    let sequenceCount = sequence.length - nonVal
    let percentage = (GCcount / sequenceCount) * 100
    return `GC %: ${percentage.toString().split('.')[0]}`
}

function meltingTm(sequence){
    let meltTemp = 0
    for (base of sequence) {
        if (base == 'T' || base == 'A'){
            meltTemp += 2
        }else if (base == 'G' || base == 'C'){
            meltTemp += 4
        }
    }
    return `Tm: ${meltTemp}`
}

function sequenceLength(sequence){
    return `Sequence Length: ${sequence.length}`
}

const handleEquation = () => {
    let fmol = document.querySelector("#fmol").value
    let ng = document.querySelector("#ng").value
    let bp = document.querySelector("#bp").value

    if (fmol === "" && ng === "" || bp === "" && ng === "" || fmol === "" && bp === "" ) {
        return "Missing field"
    }

    if (fmol === "") {
        fmol = (ng * 1000000) / (bp * 660)
        return `Fmol result: ${Number(fmol).toFixed(2)}`
    } 

    if (bp === "") {
        bp = (ng * 1000000) / (fmol * 660)
        return `Bp result: ${Number(bp).toFixed(2)}`
    }

    if (ng === "") {
        ng = (bp * fmol * 660) / 1000000
        return `Ng result: ${Number(ng).toFixed(2)}`
    }
}
