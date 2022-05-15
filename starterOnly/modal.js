function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}






// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector('.close');
const submitBtn = document.querySelector(".btn-submit");
const radioSelector = document.querySelectorAll('input[type="radio"]')

// Form element const
const form = document.getElementById("form");
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantityTournament = document.getElementById("quantity");
const checkBox = document.getElementById('checkbox1');
const radioContainer = document.getElementById('radio');
const locBox = document.getElementById('location');
const modalThanks = document.getElementById("thanks"); 
const closeModalThanksBtn = document.querySelector(".close-thanks-btn");

const numbers = /^[0-9]+$/;
const data =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

const errorMessage ={
  firstNameError : "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.",
  lastNameError : "Veuillez entrer 2 caractères ou plus pour le champ du Nom.",
  emailError : "Veuillez entrer une adresse mail Valide",
  dateError : "Vous devez entrer votre date de naissance.",
  tournamentError : "Veuillez indiquer un nombre de tournois",
  locationError : "Veuillez choisir une ville",
  checkboxError : "Vous devez vérifier que vous acceptez les termes et conditions.",
};
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalThanks.style.display= 'none';
}

// close modal form

function closeModal(){
  modalbg.style.display = 'none';
}

closeModalBtn.addEventListener("click", closeModal);

//  close modal thanks 


function closeModalThanks() {
  modalThanks.style.display = "none"; 
}
closeModalThanksBtn.addEventListener("click", closeModal);

// TODO : Refactor ///////////////////////////////////////////////////////////////
firstName.addEventListener('keyup' , validateFirstName);
lastName.addEventListener('keyup' , validateLastName);
email.addEventListener('keyup' , validateEmail);
birthDate.addEventListener('keyup', validateBirthdate);
quantityTournament.addEventListener('keyup', validateTournament);
checkBox.addEventListener('submit', validateCheckbox);

// locBox.addEventListener('submit' , validateLoc2);
// radioContainer.addEventListener('submit', validateLoc);

// essaie merge


function validateFirstName() {
  if (firstName.value.length >= 2) {
    return true;
  } else {
    firstName.setCustomValidity(errorMessage.firstNameError);
  }
}

function validateLastName() {
  if (lastName.value.length >= 2) {
    return true;
  } else {
    lastName.setCustomValidity(errorMessage.lastNameError);
  }
}

function validateEmail() {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    return true;
  } else {
    email.setCustomValidity(errorMessage.emailError);
  }
}

function validateBirthdate(){
  if(birthDate.value === null || birthDate.value === ""){
    birthDate.setCustomValidity(errorMessage.dateError);
  }if (birthDate.value.length != 10) {
    birthDate.setCustomValidity(errorMessage.dateError);
  }else{
    return true;
  }
}


function validateTournament() {
  if(quantityTournament.value === ''){
    quantityTournament.setCustomValidity(errorMessage.tournamentError);
  }else{
    return true;
  }
}


function validateCheckbox(){
  if(checkBox.checked){
    return true ;
  }
}

// Loc validation

// function validateLoc(){
//   if(radioContainer.checked){
//     radioContainer.setCustomValidity('');
//   }else{
//     radioContainer.setCustomValidity(errorMessage.locationError);
//   }
// }


// FUNCTION VALIDATION
form.addEventListener('submit', validate);

function validate(e){
  e.preventDefault();

  if(firstName.value && lastName.value && email.value && birthDate.value && checkBox.checked === true){
    modalbg.style.display = "block";
    modalThanks.style.display= 'block';
    return true;
  }else{
    return false;
  }
}



/////////////////////////////////////////////////////////////////////////////////////////////


// Submit SHUT UP !!!!!!!!!
// form.addEventListener('submit' , (e) => {
//   e.preventDefault();
  // validForm(this);
// })


// validate submit

// firstName.addEventListener('first', () => {
//   firstName.setCustomValidity("");
//   firstName.checkValidity();
// });

