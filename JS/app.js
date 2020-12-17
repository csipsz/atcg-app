
let sequence = {}
const handleChange = (event) => {
    event.preventDefault();
    let key = event.target.id;
    let value = event.target.value;
    sequence[key] = value;
    console.log(sequence[key]);
}