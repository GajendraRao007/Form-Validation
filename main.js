let submitButton = document.getElementById('submitbtn').addEventListener('click', mybtn)

let firstName;
let lastName;
let email;
let password;

function mybtn(){

    firstName = document.getElementById('firsttxt').value
    lastName = document.getElementById('lasttxt').value
    email = document.getElementById('emailtxt').value
    password = document.getElementById('passwordtxt').value
    
  if(firstName.value === "" || lastName.value ===""|| email.value ==="" || password.value ===""){
    document.getElementById('first-name-display').textContent ="First Name cannot be empty";
    document.getElementById('last-name-display').textContent ="First Name cannot be empty";
    document.getElementById('first-name-display').textContent ="First Name cannot be empty";
    document.getElementById('first-name-display').textContent ="First Name cannot be empty";
  }
}