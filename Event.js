function validateForm() {
    var fullName = prompt("Enter your full name:");
    var username = prompt("Enter your username:");
    var password = prompt("Enter your password:");
    var confirmPassword = prompt("Confirm your password:");
    var gender = prompt("Enter your gender (Male/Female):");
    var phone = prompt("Enter your phone number:");
    var email = prompt("Enter your email address:");
    var state = prompt("Enter your state:");
    var agreement = prompt("Agree to terms and conditions (Yes/No):");
  
    if (!isValidFullName(fullName)) {
      alert("Please enter a valid full name");
      return false;
    }
  
    if (!isValidUsername(username)) {
      alert("Please enter a valid username (alphanumeric)");
      return false;
    }
  
    if (!isValidPassword(password)) {
      alert("Please enter a valid password");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
  
    if (!isValidGender(gender)) {
      alert("Please enter a valid gender (Male/Female)");
      return false;
    }
  
    if (!isValidPhone(phone)) {
      alert("Please enter a valid phone number (10 digits)");
      return false;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    if (!isValidState(state)) {
      alert("Please enter a valid state");
      return false;
    }
  
    if (!isValidAgreement(agreement)) {
      alert("You must agree to the terms and conditions");
      return false;
    }
  
    alert("Signup successful! Redirecting to Login page...");

  }
  
  validateForm();
  