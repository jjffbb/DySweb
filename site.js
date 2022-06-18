function sendData(name, age){

    fetch("https://jjffbb.github.io/DySweb/Index.html", {
        method: "POST",
        mode: "core",
        headers: {"Content_Type":"application/json"},
        body: JSON.stringify({name:name, age:age})
    })
    .then(response => response.json()
    .then(json => console.log(json)))
    .catch(error => alert(error.message));
}

addEventListener("load", () => {
    fetch("https://jjffbb.github.io/DySweb/Home.html")
    .then(resp => resp.json())
    .then(data =>{
        data.forEach(element => {
            console.log.log(element.name);
        });
    })
})

document.getElementById("sendInfo")
.addEventListener("click", (evt) => {
    evt.preventDefault();

    let name = document.getElementById("name").value
    let age = document.getElementById("age").value

    sendData(name, age);

})
