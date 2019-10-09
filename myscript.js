var sendBtn = document.querySelector("#sendBtn");
var messageIn = document.querySelector("#messageIn");
var messageOut = document.querySelector("#messageOut");

sendBtn.addEventListener("click", displayMessage);

function displayMessage(){
    var content = messageIn.value;
    if (content === ""){
        alert("please enter a valid message");
    }
    else{
        messageOut.innerHTML = content;
    }
    
}