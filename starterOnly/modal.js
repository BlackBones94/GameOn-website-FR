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
const radioError = document.querySelector('.checkbox-label');
var inputs = document.getElementsByTagName("input");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // modalThanks.style.display= 'none';
}

// close modal form

function closeModal(){
  modalbg.style.display = 'none';
}

closeModalBtn.addEventListener("click", closeModal);


// désactivation du submit défaut

form.addEventListener('submit',  function (e) {
  e.preventDefault();
});


// valid let

let valid = false;

// first name validation

form.addEventListener('submit', validateFirstName);
firstName.addEventListener('keyup' , validateFirstName);

let span = document.createElement("span");
span.style.color = "red";
span.style.fontSize = "12px";

function validateFirstName() {
  let firstInput = firstName.value;
  if (firstInput.length < 2 && firstInput !== null) {
    firstName.parentNode.appendChild(span);
    span.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    valid = false;
    return false;
  } else {
    firstName.parentNode.removeChild(span);
    valid = true;
    return true;
  }
}

// last name validation

form.addEventListener('submit', validateLastName);
lastName.addEventListener('keyup' , validateLastName);

let span2 = document.createElement("span");
span2.style.color = "red";
span2.style.fontSize = "12px";

function validateLastName() {
  let lastInput = lastName.value;
  if (lastInput.length < 2 &&  lastInput !== null) {
    lastName.parentNode.appendChild(span2);
    span2.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    valid = false;
    return false;
  } else {
    lastName.parentNode.removeChild(span2);
    span2.style.textAlign = "center";
    valid = true; 
    return true;
  }
}

// email validation
form.addEventListener('submit', validateEmail);
email.addEventListener('keyup', validateEmail);

let error = document.createElement("span");
let errorMail = email.parentNode.appendChild(error);

function validateEmail() {
  let mail = email.value;
  let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(regexMail.exec(mail) == null) {
    errorMail.textContent = "Veuillez renseigner une adresse mail valide.";
    errorMail.style.color = "red";
    errorMail.style.fontSize = "12px";
    valid = false;
    return false
  }else{
    email.parentNode.removeChild(error);
    valid = true;
    return true;
  }
}

// birthdate validation 
form.addEventListener('submit', validateBirthdate);
birthDate.addEventListener('change', validateBirthdate);

let dateRegex = /^\d{4}-\d\d-\d\d$/;
let span5 = document.createElement("span");


function validateBirthdate(){
  if(dateRegex.exec(birthDate.value)) {
    birthDate.parentNode.removeChild(span5);
    valid = true;
    return true;
  }else{
    birthDate.parentNode.appendChild(span5);
    span5.innerText = "Vous devez rentrer votre date de naissance.";
    span5.style.color = "red";
    span5.style.fontSize = "12px";
    valid = false;
    return false;
  }
}

// Tournois validation
form.addEventListener('submit', validateTournament);
quantityTournament.addEventListener('change', validateTournament);

let span3 = document.createElement("span");
span3.style.color = "red";
span3.style.fontSize = "12px";

let regexQuantity = /\b([0-9]|[1-9][0-9])\b/;

function validateTournament() {
  if(regexQuantity.test(quantityTournament.value)){
    quantityTournament.parentNode.removeChild(span3); 
    valid = true;
    return true;
  }else{
    quantityTournament.parentNode.appendChild(span3);
    span3.textContent = "Veuillez saisir un chiffre.";
    valid = true;
    return true;
  }
}

// checkbox validation
form.addEventListener('submit', validateCheckbox);
checkBox.addEventListener('click', validateCheckbox);

let span4 = document.createElement("span");
span4.style.color = "red";
span4.style.fontSize = "12px";

function validateCheckbox(){
  if(checkBox.checked === true){
    checkBox.parentNode.removeChild(span4);
    valid = true;
    return true;
  }else{
    checkBox.parentNode.appendChild(span4);
    span4.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    valid = false;
    return false;
  }
}

// Loc validation

form.addEventListener('submit', isValidLocation);
form.addEventListener('change', isValidLocation);

const btnRadio = document.querySelectorAll('input[type=radio]');
let p2 = document.createElement("p");
p2.style.color = "red";
p2.style.fontSize = "12px";

function isValidLocation() {
  for(let i =0; i < btnRadio.length; ){
    if(btnRadio[i].checked){
      radioError.parentNode.removeChild(p2);
      valid = true;
    }else{
      i++;
      radioError.parentNode.appendChild(p2);
      p2.innerText = "Veuillez cocher une ville.";
      valid = false;
    }
  }
};



form.addEventListener("submit", valide);
function valide() {
  if (valid === true) {
    const thank = document.getElementById("thanks");
    thank.style.display = "block";
    const body = document.querySelector(".modal-body");
    body.style.display = "none";
    return true;
  } else {
    valid = false;
    alert("Merci de compléter les cases manquantes");
  }
}



// FUNCTION RESETFORM////////////////////////////////////////////////////////////////////////

const closeModalThanksBtn = document.querySelector(".close-thanks-btn");

closeModalThanksBtn.addEventListener("click", thankYou);
function thankYou() {
  form.submit();
}

/////////////////////////////////////////////////////////////////////////////////////////////


