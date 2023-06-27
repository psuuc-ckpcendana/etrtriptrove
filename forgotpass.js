const uname = 'AdminDoming';

    function resetPassword() {
      var username = document.getElementById("eform").value;
  

      // Check if the provided username exists in the login credentials object
      if (username == uname) {
        window.location.href = 'nextfp.html';
      } else if (username != uname){
        alert("Invalid username. Please try again.");
        return;
      }
      else{
        alert("Please enter your email");
        return;
      }
    }

  const codde = '12345'
  function resetPasswordN() {
    var code = document.getElementById("code").value;


    // Check if the provided username exists in the login credentials object
    if (codde == code) {
      window.location.href = 'nextffp.html'
    } else {
      alert("Oops!! Wrong Code.");
    }
  }

  function resetPasswordNew() {
    var code = document.getElementById("pform").value;
    var code1 = document.getElementById("pform1").value;

    // Check if the provided username exists in the login credentials object
    if (code1 == code) {
      alert("Password Reset Successfully!");
      window.location.href = 'login.html'
    } 
    else if (code1 == '') {
      alert("Please Confirm your password");
      return;
    } 
    else if (code1 != code) {
      alert("Your password do not match.");
      return;
     }else {
      alert("Enter your new password");
      return;
  }
}

