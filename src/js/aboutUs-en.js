// Get the modal
var josifModal = document.getElementById("josifModal");
var dobreModal = document.getElementById("dobreModal");
var slavicaModal = document.getElementById("slavicaModal");

// Get the button that opens the modal
var josifBtn = document.getElementById("josifBtn");
var dobreBtn = document.getElementById("dobreBtn");
var slavicaBtn = document.getElementById("slavicaBtn");

var josifPicBtn = document.getElementById("josifPicBtn");
var dobrePicBtn = document.getElementById("dobrePicBtn");
var slavicaPicBtn = document.getElementById("slavicaPicBtn");

// Get the <span> element that closes the modal
var closeJosif = document.getElementsByClassName("closeJosif")[0];
var closeDobre = document.getElementsByClassName("closeDobre")[0];
var closeSlavica = document.getElementsByClassName("closeSlavica")[0];

// When the user clicks the button, open the modal 
josifBtn.onclick = function() {
    josifModal.style.display = "block";
}

dobreBtn.onclick = function() {
    dobreModal.style.display = "block";
  }

  slavicaBtn.onclick = function() {
    slavicaModal.style.display = "block";
  }

  josifPicBtn.onclick = function() {
    josifModal.style.display = "block";
}

dobrePicBtn.onclick = function() {
    dobreModal.style.display = "block";
  }

  slavicaPicBtn.onclick = function() {
    slavicaModal.style.display = "block";
  }
  
// When the user clicks on <span> (x), close the modal
closeJosif.onclick = function() {
    josifModal.style.display = "none";
}

closeDobre.onclick = function() {
    dobreModal.style.display = "none";
}

closeSlavica.onclick = function() {
    slavicaModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == josifModal) {
    josifModal.style.display = "none";
    } else 
        if(event.target == dobreModal){
        dobreModal.style.display="none";
    } else 
        if(event.target == slavicaModal){
            slavicaModal.style.display="none";
        }
}
