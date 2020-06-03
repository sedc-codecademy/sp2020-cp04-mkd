// Get the modal
var josifModal = document.getElementById("josif-modal");
var dobreModal = document.getElementById("dobre-modal");
var slavicaModal = document.getElementById("slavica-modal");

// Get the button that opens the modal
var josifBtn = document.getElementById("josif-btn--bio");
var dobreBtn = document.getElementById("dobre-btn--bio");
var slavicaBtn = document.getElementById("slavica-btn--bio");

var josifPicBtn = document.getElementById("josifPic__btn--bio");
var dobrePicBtn = document.getElementById("dobrePic__btn--bio");
var slavicaPicBtn = document.getElementById("slavicaPic__btn--bio");

// Get the <span> element that closes the modal
var closeJosif = document.getElementsByClassName("josif-modal--close")[0];
var closeDobre = document.getElementsByClassName("dobre-modal--close")[0];
var closeSlavica = document.getElementsByClassName("slavica-modal--close")[0];

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
