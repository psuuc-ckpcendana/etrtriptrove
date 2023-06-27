const signedusers = [];

function register() {

  const username = document.getElementById('uname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('epass').value;

  const user = {
    username: username,
    email: email,
    password: password
  };
  if(username === '' || email === '' || password === ''){
    alert("Please fill in the fields.");
    return;
  }
  signedusers.push(user);
  alert('Signed in successfully');
  window.location.href = 'register.html';

}

function signin(){
  window.location.href = 'login.html'
}