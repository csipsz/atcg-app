let user = {}
const handleChange = (event) => {
    event.preventDefault();
    let key = event.target.id;
    let value = event.target.value;
    user[key] = value;
    
    console.log(user);
}