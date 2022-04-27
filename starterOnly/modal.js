function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll('.close');

// Form element const
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const eMail = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const loc1 = document.getElementById('location1');
const loc2 = document.getElementById('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeModalBtn.forEach(close => close.addEventListener("click", closeModal));


function closeModal(){
  modalbg.style.display = 'none';
}

// Input firstName
function validate(){
  if (firstName === '' && firstName.lenght > 1 ) {
    return false;
  }
}
