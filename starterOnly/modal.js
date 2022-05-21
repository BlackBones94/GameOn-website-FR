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
const closeModalBtn = document.querySelector('.close');
const submitBtn = document.querySelector(".btn-submit");

// Form element const
const form = document.getElementById("form");
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantityTournament = document.getElementById("quantity");
const checkBox = document.getElementById('checkbox1');
const radioContainer = document.getElementById('radio');
const modalThanks = document.getElementById("thanks"); 
const closeModalThanksBtn = document.querySelector(".close-thanks-btn");
const loc1 = document.getElementById('location1');
const loc2 = document.getElementById('location2');
const loc3 = document.getElementById('location3');
const loc4 = document.getElementById('location4');
const loc5 = document.getElementById('location5');
const loc6 = document.getElementById('location6');

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

//  close modal thanks /////////////////////////////////

function closeModalThanks() {
  modalThanks.style.display = "none"; 
}
closeModalThanksBtn.addEventListener("click", closeModal);
// ////////////////////////////////////////////////////


// TODO : Refactor ///////////////////////////////////////////////////////////////
firstName.addEventListener('keyup' , validateFirstName);
lastName.addEventListener('keyup' , validateLastName);
email.addEventListener('keyup' , validateEmail);
birthDate.addEventListener('keyup', validateBirthdate);
quantityTournament.addEventListener('keyup', validateTournament);
checkBox.addEventListener('submit', validateCheckbox);



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


(function isValidLocation() {
  const btnRadio = form.querySelectorAll('input[type=radio]');
  const radioLength = btnRadio.length;
  const firstRadio = radioLength > 0 ? btnRadio[0] : null;

  function init() {
      if (firstRadio) {
          for (let i = 0; i < radioLength; i++) {
              btnRadio[i].addEventListener('change', checkValidity);
          }

          checkValidity();
      }
  }

  function isChecked() {
      for (let i = 0; i < radioLength; i++) {
          if (btnRadio[i].checked) return true;
      }

      return false;
  }

  function checkValidity() {
      const errorLoc = !isChecked() ? 'Veuillez Choisir une ville' : '';
      firstRadio.setCustomValidity(errorLoc);
  }

  init();
})();


// FUNCTION VALIDATION
form.addEventListener('submit', validate);

function validate(e){
  e.preventDefault();

  if(firstName.value && lastName.value && email.value && birthDate.value && checkBox.checked &&  loc1.checked || loc2.checked || loc3.checked || loc4.checked || loc5.checked || loc6.checked === true){
    modalbg.style.display = "block";
    modalThanks.style.display= 'block';
    return true;
  }else{
    return false;
  }
}


// FUNCTION RESETFORM////////////////////////////////////////////////////////////////////////
function resetForm() {
  document.getElementById("form").reset();
}
/////////////////////////////////////////////////////////////////////////////////////////////


