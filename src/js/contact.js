//for making calls
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

// send Button
let sendBtn = document.getElementById("send-btn");
sendBtn.Onclick = function(){

}




