// var button = document.getElementsByTagName("Button")[0];
// button.addEventListener("mouseleave", function() {
//     console.log("hello");
// })
// var button = document.getElementsByTagName("Button")[0];
// button.addEventListener("mouseenter", function() {
//     console.log("hello");
// })
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var div = document.createElement("div");
    div.classList.add("wrap");
    var li = document.createElement("li");
    var del = document.createElement("button");
    ul.appendChild(div);
    div.append(li, del);
    li.appendChild(document.createTextNode(input.value));
    input.value="";
    del.innerHTML= "Delete";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

