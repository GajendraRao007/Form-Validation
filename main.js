let submitButton = document.getElementById('submitbtn')
submitButton.addEventListener('click', mybtn)

let firstName;
let lastName;
let email;
let password;

function mybtn(){
    event.preventDefault();
    
    firstName = document.getElementById('firsttxt').value
    lastName = document.getElementById('lasttxt').value
    email = document.getElementById('emailtxt').value
    password = document.getElementById('passwordtxt').value

    
    document.getElementById('first-name-display').textContent ="";
    document.getElementById('last-name-display').textContent ="";
    document.getElementById('email-display').textContent ="";
    document.getElementById('password-display').textContent ="";
    
    if(firstName === "" || lastName ===""|| email === "" || password ===""){

    document.getElementById('first-name-display').textContent ="First Name cannot be empty";
    document.getElementById('last-name-display').textContent ="Last Name cannot be empty";
    document.getElementById('email-display').textContent ="Email Address cannot be empty";
    document.getElementById('password-display').textContent ="Password cannot be empty";

    
}else{
    console.log('error');
  }
}
