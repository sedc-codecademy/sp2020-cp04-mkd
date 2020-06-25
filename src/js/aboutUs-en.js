// Get the modal
let mainDentistModal = document.getElementById("mainDentist-modal");
let dentalTechnicianModal = document.getElementById("dentalTechnician-modal");
let nurseModal = document.getElementById("nurse-modal");

// Get the button that opens the modal
let mainDentist = document.getElementById("mainDentist-btn--bio");
let dentalTechnician = document.getElementById("dentalTechnician-btn--bio");
let nurse = document.getElementById("nurse-btn--bio");

let mainDentistPicBtn = document.getElementById("mainDentistPicBtn__btn--bio");
let dentalTechnicianPic = document.getElementById("dentalTechnicianPic__btn--bio");
let nursePicBtn = document.getElementById("nursePic__btn--bio");

// Get the <span> element that closes the modal
let closeMainDentist = document.getElementById("closeMainDentist");
let closeDentalTechnician = document.getElementById("closeDentalTechnician");
let closeNurse = document.getElementById("closeNurse");

// When the user clicks the button, open the modal 
mainDentist.onclick = function() {
    mainDentistModal.style.display = "block";
}

dentalTechnician.onclick = function() {
    dentalTechnicianModal.style.display = "block";
  }

  nurse.onclick = function() {
    nurseModal.style.display = "block";
  }

  mainDentistPicBtn.onclick = function() {
    mainDentistModal.style.display = "block";
}

dentalTechnicianPic.onclick = function() {
    dentalTechnicianModal.style.display = "block";
  }

  nursePicBtn.onclick = function() {
    nurseModal.style.display = "block";
  }
  
// When the user clicks on <span> (x), close the modal
closeMainDentist.onclick = function() {
    mainDentistModal.style.display = "none";
}

closeDentalTechnician.onclick = function() {
    dentalTechnicianModal.style.display = "none";
}

closeNurse.onclick = function() {
    nurseModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mainDentistModal) {
    mainDentistModal.style.display = "none";
    } else 
        if(event.target == dentalTechnicianModal){
        dentalTechnicianModal.style.display="none";
    } else 
        if(event.target == nurseModal){
            nurseModal.style.display="none";
        }
}
