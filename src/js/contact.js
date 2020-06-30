let makeBtn = document.getElementById('makeBtn');   
    makeBtn.innerHTML = "Make an appoitment";

let body = document.getElementById("body"[0]);
    body.appendChild(makeBtn);

makeBtn.addEventListener ("click", function() {
    alert ("clicked");
})


let sendBtn = document.getElementById('sendBtn');   
    sendBtn.innerHTML = "Send";

let body = document.getElementById("body"[1]);
    body.appendChild(sendBtn);

sendBtn.addEventListener ("click", function() {
    alert ("clicked");
})


let callBtn = document.getElementById('sendBtn');   
    callBtn.innerHTML = "Call";

let body = document.getElementById("body"[2]);
    body.appendChild(callBtn);

callBtn.addEventListener ("click", function() {
    alert ("clicked");
})
