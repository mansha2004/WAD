document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get user input from the form
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Create an object for the user registration data
    let userData = {
        username: username,
        email: email,
        password: password
    };

    // Push data to localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    // Simulate an AJAX POST request
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/api/register', true); // Replace with your backend URL
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('Registration Successful');
            window.location.href = 'userlist.html'; // Redirect to the new page showing the list of users
        } else {
            alert('Registration failed');
        }
    };
    xhr.send(JSON.stringify(userData)); // Send the data as JSON
});
