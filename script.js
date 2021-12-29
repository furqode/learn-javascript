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
    del.innerHTML= "Remove";
    del.classList.add("remove");
    ul.appendChild(div);
    div.append(li, del);
    li.appendChild(document.createTextNode(input.value));
    input.value="";
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

function deleteTask(element) {
    if (element.target.className === "remove"){
		element.target.parentElement.remove();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", deleteTask);


// Ternary Operators

function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle() ? 10 : 1;

// Switch Case

