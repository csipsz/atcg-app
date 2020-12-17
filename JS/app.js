let complementBox = () => document.querySelector("#complement")
let reverseBox = () => document.querySelector("#reverse")
let revCompBox = () => document.querySelector("#reverse-complement")
let percentDiv = () => document.querySelector('#percent-div')
let meltingDiv = () => document.querySelector('#melting-div')

let sequence = []

const handleChange = (event) => {
    //event.preventDefault();
    sequence = event.target.value.toUpperCase();
    event.target.value = event.target.value.toUpperCase();

    complementBox().textContent = complement(sequence)
    reverseBox().textContent = reversing(sequence)
    revCompBox().textContent = complementReverse(sequence)  
    percentDiv().textContent = GCpercent(sequence)
    meltingDiv().textContent = meltingTm(sequence)
}
// complementBox().addEventListener("click", function(event){
//     console.log(event.target.value)
//     copyToClipBoard(event.target)
// })

// function copyToClipBoard(element){
//     element.select(); 
//     document.execCommand("Copy")
// }


/////////////////////////////////////////////////////////////

function copyToClipBoard(element){
    element.select(); 
    document.execCommand("Copy")
}







