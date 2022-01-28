let todoURL = "http://127.0.0.1:5000/todo";

window.addEventListener('DOMContentLoaded', async function () {
    let response = await fetch(todoURL);
    let text = await response.text();
	document.getElementById("todolist").innerHTML = text;
    document.getElementById("todolist").addEventListener('focusout', sendPost);
});

function sendPost() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", todoURL);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.responseText);
       }};

    let data = document.getElementById("todolist").value.toString();

    xhr.send(data);
}

setInterval(() => {
    curTime = new Date();

    document.getElementById("hour").style.transform = `rotate(${curTime.getHours()*30+curTime.getMinutes()/2}deg) translate(0px, -30px)`;
    document.getElementById("min").style.transform = `rotate(${curTime.getMinutes()*6}deg) translate(0px, -50px)`;
})