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

// converting this function into ternary and assigning it to a variable

function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// var experiencePoints = winBattle() ? 10 : 1; commenting this out cuz it was breaking the code

// Switch Case

//Using this function, answer the questions below:

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

// Learned About Let and Const in ES6
//  use const when the varibale is not going to change
//  and use let when you're going to use a variable that's going to change.


const wizard = 'bobby';
console.log(wizard);
let experience = 100;
let p1Level = false;
// using let in a if statement creates a new scope which is why the variable wizardLevel won't change
 if (experience > 90 ) {
     let p1Level = true;
     console.log("inside", p1Level);
 }
 console.log("outside", p1Level);