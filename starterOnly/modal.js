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
const radioError = document.querySelector('.checkbox-label');

// Form element const
const form = document.getElementById("form");
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantityTournament = document.getElementById("quantity");
const checkBox = document.getElementById('checkbox1');

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function closeModal(){
  modalbg.style.display = 'none';
}

closeModalBtn.addEventListener("click", closeModal);


// désactivation du submit 

form.addEventListener('submit',  function (e) {
  e.preventDefault();
});


// valid let

let valid = false;


// first name validation

// ecoute de form et firstName
form.addEventListener('submit', validateFirstName);
firstName.addEventListener('keyup' , validateFirstName);
// variable error first = span
let errorFirst = document.createElement("span");
// style de la span
errorFirst.style.color = "red";
errorFirst.style.fontSize = "12px";

function validateFirstName() {
  let firstInput = firstName.value;
  if (firstInput.length < 2 && firstInput !== null) {
    firstName.parentNode.appendChild(errorFirst); 
    errorFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    valid = false;
    return false;
  }else{
    firstName.parentNode.removeChild(errorFirst);
    valid = true;
    return true;
  }
}

// last name validation

// ecoute de form et lastName
form.addEventListener('submit', validateLastName);
lastName.addEventListener('keyup' , validateLastName);
// varable errorLast = span
let errorLast = document.createElement("span");
// style de la span 
errorLast.style.color = "red";
errorLast.style.fontSize = "12px";

function validateLastName() {
  let lastInput = lastName.value;
  if (lastInput.length < 2 &&  lastInput !== null) {
    lastName.parentNode.appendChild(errorLast);
    errorLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    valid = false;
    return false;
  }else{
    lastName.parentNode.removeChild(errorLast);
    errorLast.style.textAlign = "center";
    valid = true; 
    return true;
  }
}

// email validation

// ecoute de form et email
form.addEventListener('submit', validateEmail);
email.addEventListener('keyup', validateEmail);
// variable error = span 
let error = document.createElement("span");
let errorMail = email.parentNode.appendChild(error);

// variable qui est egale a la regex 
let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function validateEmail() {
  let mail = email.value;
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

// ecoute du form et du birthdate
form.addEventListener('submit', validateBirthdate);
birthDate.addEventListener('keyup', validateBirthdate);

// variable sur la regex de la date 
let dateRegex = /^\d{4}-\d\d-\d\d$/;
// création de la variable errorBirthdate  = span
let errorBirthdate = document.createElement("span");
// style de la span 
errorBirthdate.style.color = "red";
errorBirthdate.style.fontSize = "12px";

function validateBirthdate(){
  if(!(dateRegex.exec(birthDate.value))) {
    birthDate.parentNode.appendChild(errorBirthdate);
    errorBirthdate.innerText = "Vous devez rentrer votre date de naissance."; 
    valid = false;
    return false;
  }else{
    birthDate.parentNode.removeChild(errorBirthdate);
    valid = true;
    return true;
  }
}

// Tournois validation

// ecoute du form et du nombre de tournois 
form.addEventListener('submit', validateTournament);
quantityTournament.addEventListener('change', validateTournament);

// variable error tournois = span
let errorTournament = document.createElement("span");
// style de la span 
errorTournament.style.color = "red";
errorTournament.style.fontSize = "12px";

// regex quantity pour les tournois 
let regexQuantity = /\b([0-9]|[1-9][0-9])\b/;

function validateTournament() {
  if(regexQuantity.test(quantityTournament.value)){
    quantityTournament.parentNode.removeChild(errorTournament); 
    valid = true;
    return true;
  }else{
    quantityTournament.parentNode.appendChild(errorTournament);
    errorTournament.textContent = "Veuillez saisir un chiffre.";
    valid = false;
    return false;
  }
}

// checkbox validation

// ecoute form et checkbox 
form.addEventListener('submit', validateCheckbox);
checkBox.addEventListener('click', validateCheckbox);

// error sur checkbox = span
let errorBox = document.createElement("span");
// style de la span 
errorBox.style.color = "red";
errorBox.style.fontSize = "12px";

function validateCheckbox(){
  if(checkBox.checked === true){
    checkBox.parentNode.removeChild(errorBox);
    valid = true;
    return true;
  }else{
    checkBox.parentNode.appendChild(errorBox);
    errorBox.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    valid = false;
    return false;
  }
}

// Loc validation

// ecoute sur le formulaire 
form.addEventListener('submit', isValidLocation);
form.addEventListener('change', isValidLocation);

// prise en compte du dom elem de type radio
const btnRadio = document.querySelectorAll('input[type=radio]');
// création errorLoc = P
let errorLoc = document.createElement("p");
// style de p
errorLoc.style.color = "red";
errorLoc.style.fontSize = "12px";

function isValidLocation() {
  for(let i = 0; i < btnRadio.length; ){
    if(btnRadio[i].checked){
      radioError.parentNode.removeChild(errorLoc);
      valid = true;
    }else{
      i++;
      radioError.parentNode.appendChild(errorLoc);
      errorLoc.innerText = "Veuillez cocher une ville.";
      valid = false;
    }
  }
};

// validation formulaire 

// ecoute du form 
form.addEventListener("submit", valide);
function valide() {
  if (valid === true) {
    const thank = document.getElementById("thanks");
    thank.style.display = "block";
    const body = document.querySelector(".modal-body");
    body.style.display = "none";
    return true;
  }else{
    valid = false;
    alert("Merci de compléter les cases manquantes");
  }
}

// const inputs = document.querySelector('input');

// function pour l'input firstName
function validateInput() {
  if(valid === true) {
    firstName.style.cssText = "border : 1px solid white";
  }else{
    firstName.style.cssText = "border : 1px solid red";
  }
}

// function pour l'input lastName 
function validateInputDeux() {
  if(valid === true) {
    lastName.style.cssText = "border : 1px solid white";
  }else{
    lastName.style.cssText = "border : 1px solid red";
  
  }
}

// function  pour l'input email 
function validateInputMail() {
  if(regexMail.exec(email.value) == null ) {
    email.style.cssText = "border : 1px solid red";

  }else{
    email.style.cssText = "border : 1px solid white";

  }
}

// function pour l'input date 
function validateInputBirthdate() {
  if( (dateRegex.exec(birthDate.value)) == null) {
    birthDate.style.cssText = "border : 1px solid red";
  }else{
    birthDate.style.cssText = "border : 1px solid white";
  }
}

// function pour l'input quantité de tournois 
function validateInputQuantity() {
  if( regexQuantity.test(quantityTournament.value) === true) {
    quantityTournament.style.cssText = "border : 1px solid white";
  }else{
    quantityTournament.style.cssText = "border : 1px solid red";
  }
}

// FUNCTION RESETFORM

// dom élément pour le btn de fermeture de la modal merci 
const closeModalThanksBtn = document.querySelector(".close-thanks-btn");
// ecoute sur la femeture de la modal merci
closeModalThanksBtn.addEventListener("click", thankYou);
function thankYou() {
  form.submit();
}
