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

// Form element const
const form = document.getElementById("form");
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const eMail = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantityTournament = document.getElementById("quantity");
const loc1 = document.getElementById('location1');
const loc2 = document.getElementById('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');

const numbers = /^[0-9]+$/;
const data = /^\d{2}[./-]\d{2}[./-]\d{4}$/;

const errorMessage ={
  firstError : "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.",
  lastError : "Veuillez entrer 2 caractères ou plus pour le champ du Nom.",
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
}

// close modal form

function closeModal(){
  modalbg.style.display = 'none';
}

closeModalBtn.addEventListener("click", closeModal);

// Submit SHUT UP !!!!!!!!!

form.addEventListener('submit' , (e) => {
  e.preventDefault();
})

// Input firstName

function validate(){
  if ( firstName.value === '' && firstName.value.length < 2) {
    alert ("Veuillez spécifier votre Prénom");
    return false;
  } 
  else if (lastName.value === '' && lastName.value.length < 2) {
    alert("Veuillez spécifier votre Nom");
    return false;
  }
  else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) {
    alert ("Veuillez spécifier votre email");
    return false;
  }
  // else if (birthDate.value ) {
  //   const data = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
  //   alert("Veuillez spécifier votre âge");
  //   return data.match(birthDate.value);
  // }
  else if (!(quantityTournament.value.match(numbers))) {
    alert("Veuillez spécifier le nombre de tournois");
    return false;
  }
  else if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
    alert("Veuillez spécifier un tournois");
    return false;
  }
}

// validate submit 

// submitBtn.addEventListener('submit', validate);