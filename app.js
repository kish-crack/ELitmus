import users from './users.js';

// Check if the user is signed in
if (sessionStorage.getItem('isLoggedIn')) {
  // Redirect to the main program page
  window.location.href = 'gane.html';
}

// Handle the login form submission
document.querySelector('#login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Get the username and password from the form
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  // Check if the username and password match the user credentials
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    // Set the isLoggedIn session variable to true
    sessionStorage.setItem('isLoggedIn', true);
    // Redirect to the main program page
    window.location.href = 'gane.html';
  } else {
    // Display an error message and clear the form
    alert('Invalid username or password');
    document.querySelector('#login-form').reset();
  }
});

// Handle the sign-up form submission
document.querySelector('#signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Get the username and password from the form
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  // Check if the username already exists
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    // Display an error message and clear the form
    alert('Username already exists');
    document.querySelector('#signup-form').reset();
  } else {
    // Add the new user to the users array
    users.push({ username, password });
    // Set the isLoggedIn session variable to true
    sessionStorage.setItem('isLoggedIn', true);
    // Redirect to the main program page
    window.location.href = 'gane.html';
  }
});
