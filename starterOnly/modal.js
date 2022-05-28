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
// const inputs = document.getElementsByTagName("input");
// const loc = document.getElementById("location1");
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

form.addEventListener('change', validateFirstName);
firstName.addEventListener('keyup' , validateFirstName);

let errorFirst = document.createElement("span");
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

form.addEventListener('change', validateLastName);
lastName.addEventListener('keyup' , validateLastName);

let errorLast = document.createElement("span");
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
    span2.style.textAlign = "center";
    valid = true; 
    return true;
  }
}

// email validation

form.addEventListener('change', validateEmail);
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

form.addEventListener('change', validateBirthdate);
birthDate.addEventListener('keyup', validateBirthdate);


let dateRegex = /^\d{4}-\d\d-\d\d$/;
let errorBirthdate = document.createElement("span");
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

form.addEventListener('change', validateTournament);
quantityTournament.addEventListener('change', validateTournament);

let errorTournament = document.createElement("span");
errorTournament.style.color = "red";
errorTournament.style.fontSize = "12px";

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

form.addEventListener('change', validateCheckbox);
checkBox.addEventListener('click', validateCheckbox);

let errorBox = document.createElement("span");
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
form.addEventListener('change', isValidLocation);
// form.addEventListener('submit', isValidLocation);


const btnRadio = document.querySelectorAll('input[type=radio]');
let errorLoc = document.createElement("p");
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



// FUNCTION RESETFORM

const closeModalThanksBtn = document.querySelector(".close-thanks-btn");

closeModalThanksBtn.addEventListener("click", thankYou);
function thankYou() {
  form.submit();
}
