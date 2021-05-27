function CreateButton(){

let height = prompt("Enter the height of button that you want to give:");
let width = prompt("Enter the width of button that you want to give:");
let text = prompt("Enter the text of button that you want to give:");


let x = document.createElement('BUTTON');
x.style.height = height+"px" ;
x.style.width = width+"px" ;
x.innerHTML = text ;
x.className = "hey";
console.log("Created");

document.body.appendChild(x);
}

function moveTop(){

    let top=prompt("Enter the size to move top:");

    let x = document.querySelector('.hey');
    x.style.position = "relative";
    x.style.top = top+"px";
}


function moveRight(){

    let Right=prompt("Enter the size to move Right:");

    let x = document.querySelector('.hey');
    x.style.position = "relative";
    x.style.right = Right+"px";
}


function moveBottom(){

    let bottom=prompt("Enter the size to move Bottom:");

    let x = document.querySelector('.hey');
    x.style.position = "relative";
    x.style.bottom = bottom+"px";
}


function moveLeft(){

    let left=prompt("Enter the size to move Left:");

    let x = document.querySelector('.hey');
    x.style.position = "relative";
    x.style.Left = left+"px";
}