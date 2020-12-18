let sequence = []
//let sequence2 = []

const handleChange = (event) => {
    sequence = event.target.value.toUpperCase();
    event.target.value = event.target.value.toUpperCase();

    complementBox().textContent = complement(sequence)
    reverseBox().textContent = reversing(sequence)
    revCompBox().textContent = complementReverse(sequence)  
    percentDiv().textContent = GCpercent(sequence)
    meltingDiv().textContent = meltingTm(sequence)
}

const handleChange2 = (event) => {
    sequence2 = event.target.value.toUpperCase();
    event.target.value = event.target.value.toUpperCase();

    complementBox2().textContent = complement(sequence2)
    reverseBox2().textContent = reversing(sequence2)
    revCompBox2().textContent = complementReverse(sequence2)  
    percentDiv2().textContent = GCpercent(sequence2)
    meltingDiv2().textContent = meltingTm(sequence2)
}

function copyToClipBoard(element){
    element.select(); 
    document.execCommand("Copy")
}







