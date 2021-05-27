let aname = prompt("Enter your name:");

    

function passchat(){
    let chat = document.createElement('div');
    let x = document.querySelector('.chat-bar').value;


    chat.className = "Anelement"
    chat.setAttribute('name','message');
    chat.style.background = "black";
    chat.style.color = "white";
    chat.style.padding = "5px"
    chat.style.marginLeft = "20px";
    chat.style.marginRight = "20px";
    chat.style.wordBreak ="break-all";
    chat.style.display = "flex";
    chat.style.flexDirection = "colmun";
    chat.style.borderRadius = "20px";
    chat.style.marginBottom = "10px";
    chat.innerHTML = "&nbsp;"+ aname  +" : &nbsp;"+x;
    document.querySelector('.chat-bar').value = null;

    if(x==""){
        alert("Type something to sent the message");
        chat.style.background = "none";
        chat.style.color = "none";
        chat.style.padding = "none"
        chat.style.marginBottom = "0px";
        chat.style.display = "none";
        chat.style.flexDirection = "none";
        chat.style.borderRadius = "0px";
    }

    document.body.appendChild(chat);
}